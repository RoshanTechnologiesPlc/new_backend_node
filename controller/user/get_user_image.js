const {getUserInformation} = require('../../controller/user/db_operations')


const axios = require('axios');
require('dotenv').config();
async function getUserImage(req, res) {
    if (!req.user || !req.user.id) {
        return res.status(401).send('User not authenticated.');
    }

    const userId = req.user.id;

    try {
        // Assuming getUserById returns a user object with a blobName field
        const user = await getUserInformation(userId);
        // console.log(user);
        console.log(`user.imageUrl while getting user image : ${user.imageUrl}`)
        if (!user || !user.imageUrl) {
            return res.status(404).send('Image not found.');
        }

        const blobName = user.imageUrl;
        const sasUrl = process.env.BLOB_URL
        const sasToken = process.env.BLOB_SAS_TOKEN
    
        const blobUrlWithSas = `${sasUrl}/${blobName}${sasToken}`;
        console.log(blobUrlWithSas)
        const response = await axios.get(blobUrlWithSas, { responseType: 'stream' });
        console.log(response.data)
        if (response.status === 200) {
            res.setHeader('Content-Type', response.headers['content-type']);
            response.data.pipe(res);
        } else {
            res.status(response.status).send('Failed to retrieve image.');
        }
    } catch (error) {
        console.log(`Error retrieving image: ${error}`);
        res.status(500).send('Server error.');
    }
}


module.exports = {getUserImage}