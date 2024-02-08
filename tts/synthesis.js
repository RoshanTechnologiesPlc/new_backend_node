const { spawn } = require('child_process');
const { model } = require('mongoose');

async function callPythonFunction(param1, param2, name , callback) {
    let pythonProcess =  spawn('python', ["tts/" + name]);

    // Prepare data to send to Python script
    pythonProcess.stdin.write(JSON.stringify({ "param1": param1, "param2": param2 }));
    pythonProcess.stdin.end();
  
    // Listen for data from Python script
    pythonProcess.stdout.on('data', (data) => {
        callback(null, parseFloat(data)); // Convert string data to number
    });

    pythonProcess.stderr.on('data', (error) => {
        callback(`Python Error: ${error}`);
    });
}
// oromicText = "Dorgommiin Liigiiwwan Awurooppaa fi kaan sababa taphoota gulaallii gareewwan biyyaalessaan adda citanii turan guyyoota dhuma torbee kanatti deebi'uun taphatamu.Pirimeer Liigii Ingiliiziin taphni torban shanaffaa Sambata, Dilbataafi Wiixata kan taphataman ennaa tahu, morkii cimaatu eegama.Xiinxalaan kubbaa miilaa BBC Kiriis Sutoon, taphoota kanneeniif tilmaamasaa sababa wajjin akkanaan kenneera."
// // Example of calling the above function
// amharicText = "ሃ"
// somaliText = "Sahanku wuxuu daaha ka qaaday in tirada qoysaska Soomaaliyeed ay ka badan yihiin qoysaska qowmiyadda kale ee dhanka taranka. Raggu waxay guursadaan xaasas badan, waxayna leeyihiin carruur badan. Qoysaska Soomaalida ayaa la barbardhigay kuwa ku nool gobollada Nyeri, Nairobi, Mombasa, iyo Kiambu. Isbarbardhigaas ayaa muujinaya in tirada qoyska Soomaaliga ah ee halkii guriga ba uu ka badan yahay tirada qoysaska guryaha bulshada kale."
// tigrigna = "ኣብ ክልል ኣምሓራ ኣብ ገለ ገለ ከባቢታት መንግስታዊ ሓይልታት ጸጥታ “ኣጽዋር ሓቢእኩም ኣለኹም፡ ኣረክብዎ” ብዝብል ቀትለት ከምዝፈጸሙ ኮምሽን ሰብኣዊ መሰላት ኢትዮጵያ (ኢሰመኮ) ገሊጹ።ኣብ ገለ ገለ ከባቢታት እታ ክልል ግጭት ምስ ምቕጻሉ ብዝተሓሓዝ ኣካላት ጸጥታ መንግስቲ ዘይሕጋዊ ቅትለት ምፍጻሞም ኣዝዩ ኣሻቓሊ ምዃኑ ኢሰመኮ ብዓርቢ 15 መስከረም ኣብ ዘውጽኦ መግለጺ ሓቢሩ።እቲ ብሓይልታት ጸጥታ መንግስቲ ዝተፈጸመ ቅትለት ኣብ ከተማታት ኣዴት፡ ደብረማርቆስ፡ ደብረታቦር፡ ጅጋ፡ ለሚ፡ ማጀቴ፡ መራዊ፡ መርጦ ለማርያምን ሸዋ ሮቢትን ካብ 24 ሓምለ ክሳዕ 4 ጳጉመ 2015 ኣቈጻጽራ ግእዝ ብሰፊሕ ዝተፈጸመ ምዃኑ እቲ ሓበሬታ የረድእ።ግዳያት፡ ካብ ናይ ገዛ ገዛ ተፍትሽን ኣብ እዋን እቲ ግጭት ኣብ መገዲ ዝተረኽቡን ዘይዓጠቑ ኮይኖም፡ “ብረት ሓቢእኩም ኣለኹም ኣምጽእዎ” ብዝብል ዝተትሓዙ ከምዝርከብዎም ሓቢሩ።"

// callPythonFunction(somaliText, "som", "somali.py" , (error, result) => {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log(`Result from Python: ${result}`);
//         return result
//     }
// });
module.exports = callPythonFunction