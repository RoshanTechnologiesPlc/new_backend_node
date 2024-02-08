# import sys
# from ttsmms import TTS  , download
# import scipy.io.wavfile 
# import json
# tir_dir_path =download("tir","./data") # lang_code, dir for save model
# tirtts=TTS("./data/tir")

# def TigrignaSynthesis(text, newsId):

#     wav=tirtts.synthesis(text)
#     wavfile = wav['x']
#     wavfile.shape
#     scipy.io.wavfile.write("./" +  newsId + ".wav", 16000, wavfile)
#     return "saved"
# TigrignaSynthesis("ድፍድጅንድፍኝድፍግድፍግድፍ", "ere")
# if __name__ == "__main__":
#     data = json.loads(sys.stdin.read())
#     data['param1'], data['param2']
#     result = TigrignaSynthesis(data['param1'], data['param2'])
#     print(result)


import sys
from ttsmms import TTS  , download
import scipy.io.wavfile
import json
import scipy.io.wavfile
def TigrignaSynthesis(synthesis , newsId):
    # tig_dir_path = download("tir" , "./data")
    tigttms = TTS("./data/tir")    
    wav  = tigttms.synthesis(synthesis)
    wavfile = wav['x']
    wavfile.shape
    scipy.io.wavfile.write("./tigrignass.wav", 16000, wavfile)
    print("success!")
    return 1

if __name__ == "__main__":
    data = json.loads(sys.stdin.read())
    data['param1'], data['param2']
    result = TigrignaSynthesis(data['param1'], data['param2'])
    print(result)
