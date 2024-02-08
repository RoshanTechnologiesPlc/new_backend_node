import sys
from ttsmms import TTS ,download

import scipy.io.wavfile
import json
# som_dir_path = "./data/som"# lang_code, dir for save model
som_dir_path =  download("som","./data")
somtts=TTS(som_dir_path )

def SomaliSynthesis(text, newsId):

    wav=somtts.synthesis(text)
    wavfile = wav['x']
    wavfile.shape
    scipy.io.wavfile.write("./audio" +  newsId + ".wav", 16000, wavfile)
    return 1

if __name__ == "__main__":
    data = json.loads(sys.stdin.read())
    data['param1'], data['param2']
    result = SomaliSynthesis(data['param1'], data['param2'])
    print(result)