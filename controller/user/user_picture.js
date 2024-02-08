const express = require('express');
const multer = require('multer');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const {updateUserImageUrl} = require('../../controller/user/db_operations')


async function uploadImages(req, res) {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    if (!req.user || !req.user.id) {
        return res.status(401).send('User not authenticated.');
    }

    try {
        const sasUrl = process.env.BLOB_URL;
        const sasToken = process.env.BLOB_SAS_TOKEN;

        // Use original filename or another naming convention
        const blobName = req.user.id + '_' + path.basename(req.file.originalname);
        const encodedBlobName = encodeURIComponent(blobName);

        const success = await uploadToAzure(req.file.path, sasUrl, encodedBlobName, sasToken);
        if (success) {
            await updateUserImageUrl(req.user.id, encodedBlobName); // Update user image URL
            res.status(201).json({ 'message': 'File uploaded successfully.' });
        } else {
            res.status(500).send('Failed to upload file.');
        }
    } catch (error) {
        res.status(500).send('Server error: ' + error.message);
    } finally {
        // Optionally delete the file after upload
        fs.unlinkSync(req.file.path);
    }
}

async function uploadToAzure(filePath, sasUrl, blobName, sasToken) {
    const headers = { 'x-ms-blob-type': 'BlockBlob' };

    try {
        const data = fs.readFileSync(filePath);
        const response = await axios.put(`${sasUrl}/${blobName}${sasToken}`, data, { headers });

        return response.status === 201;
    } catch (ex) {
        console.log(`Error uploading file: ${ex}`);
        return false;
    }
}

module.exports = { uploadImages };
