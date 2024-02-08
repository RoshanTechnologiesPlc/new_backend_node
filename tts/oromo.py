# pip install ttsmms
import sys
# import ttsmms
from ttsmms import TTS , download
import scipy.io.wavfile
import json


def synthesis(text, newsId):
    print(" ------------")
    orm_dir_path = download("orm","./tts/data/") # lang_code, dir for save model
    # ormtts=TTS("./tts/data/orm")
    ormtts = TTS(orm_dir_path)
    wav=ormtts.synthesis(text)
    wavfile = wav['x']
    wavfile.shape
    scipy.io.wavfile.write("./tts/" +  newsId + ".wav", 16000, wavfile)
    return 
if __name__ == "__main__":
    data = json.loads(sys.stdin.read())
    data['param1'], data['param2']
    result = synthesis(data['param1'], data['param2'])
    print(result)