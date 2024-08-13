const version = '1.12.1';
const iframe = document.getElementById('api-frame');
var client = new window.Sketchfab(version, iframe);
let api;
const uid = 'd7e6aa78623a4981b340dbdd15c71c70';

var boutonAide = document.querySelector("input");

const error = () => window.console.error('Sketchfab API error');
const success = apiClient => {
api = apiClient; 



//------------------------------------------------
api.start(function () {
api.addEventListener('viewerready', () => {
    // api.getNodeMap(function(err, nodes) {
    //     if (!err) {window.console.log(nodes); }
    // });

    api.addEventListener('click',function(info) { 
    if (info.instanceID) {  // le clic se fait effectivement sur un objet 
        window.console.log('clicked node', info.instanceID);
        // if ((info.instanceID == 464) || (info.instanceID == 527)) { 
        if ((info.instanceID == 73) || (info.instanceID == 91)) { 
            window.open('rect.html', '_blank');
        }
    }
    }); 

}); // api.addEventListener('viewerready'
}); // api.start(
};


