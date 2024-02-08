import sys
from ttsmms import TTS , download
import scipy.io.wavfile
import json
amh_dir_path = download("amh","./data") # lang_code, dir for save model
amhtts = TTS(amh_dir_path )

def AmharicSynthesis(text, newsId):
    print("Called")
    wav = amhtts.synthesis(text)
    wavfile = wav['x']
    wavfile.shape
    scipy.io.wavfile.write("./audio" +  newsId + ".wav", 16000, wavfile)
    return 1

if __name__ == "__main__":
    data = json.loads(sys.stdin.read())
    data['param1'], data['param2']
    result = AmharicSynthesis(data['param1'], data['param2'])
    print(result)