const version = '1.12.1';
const iframe = document.getElementById('api-frame');
var client = new window.Sketchfab(version, iframe);
let api;
const uid = '931949c4f4aa49a89c0f8f377cef4ef2'; 

var boutonAide = document.querySelector("input");

const error = () => window.console.error('Sketchfab API error');
const success = apiClient => {
api = apiClient; 

//------------------------------------------------
const tableRec = [3, 20, 34, 48, 62, 76, 90]; //tableau des box de detection "detec")  


//------------------------------------------------
api.start(function () {
api.addEventListener('viewerready', () => {
    // api.getNodeMap(function(err, nodes) {
    //     if (!err) {window.console.log(nodes); }
    // });

    api.addEventListener('click',function(info) { 
    if (info.instanceID) {  // le clic se fait effectivement sur un objet 
        window.console.log('clicked node', info.instanceID);
        if (info.instanceID-2 == 3) { 
            window.open('rect.html', '_blank');
        }
    }
    }); 

}); // api.addEventListener('viewerready'
}); // api.start(
};


