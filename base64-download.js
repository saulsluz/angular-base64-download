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
          
          var split1 = content.split(':');

          var split2 = split1[1].split(';');
          
          var split3 = split2[1].split(',');

          var mime = split2[0];
          var base64 = split3[1];
          
          console.log('mime', mime);
          console.log('base64', base64);

          var a = document.createElement("a");
          document.body.appendChild(a);
          a.style = "display: none";
          a.href = base64;
          a.download = fileName + '.' + fileExtension;
          console.log(a);
          //a.click();
          return base64
        }

        return {
          download: download
        }
        
      }])
  
  })();