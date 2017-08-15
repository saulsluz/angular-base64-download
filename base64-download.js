(function () {
  
    angular.module('ngBase64Download', [])
  
      .provider('base64DownloadConfig',function(){
        
        this.$get = function(){
          return this
        }

      })
      
      .factory('base64DownloadFactory', ['base64DownloadConfig', function(base64DownloadConfig){
        
        function download(content, fileName, fileExtension){
          if (!content) throw new Error('no content found')
          
          var split1 = content.split(':')
          if (split1.length == 1) throw new Error('could not parse content')
          
          var split2 = split1[1].split(';')
          if (split2.length == 1) throw new Error('could not parse content')

          var split3 = split2[1].split(',')
          if (split3.length == 1) throw new Error('could not parse content')

          var mime = split2[0]
          if (!mime) throw new Error('no mime type found')

          var base64 = split3[1]
          if (!base64) throw new Error('no base64 data found')

          var a = document.createElement("a")
          document.body.appendChild(a)
          a.style = "display: none"
          a.href = content
          a.download = fileName + '.' + fileExtension
          a.click()

          return base64;
        }

        return {
          download: download
        }
        
      }])
  
  })();