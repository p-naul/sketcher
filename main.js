const version = '1.12.1';
const iframe = document.getElementById('api-frame');
var client = new window.Sketchfab(version, iframe);
let api;
const uid = 'd52b36c6cc5343b387883f763ef2693d'; 

var boutonAide = document.querySelector("input");

const error = () => window.console.error('Sketchfab API error');
const success = apiClient => {
api = apiClient; 

const TObj = [
    [527, 'Rectangular Backshell\nClick to shape your own design in 3D'],
    [464, 'Rectangular Backshell\nClick to shape your own design in 3D'],
    [55, 'Flexible flat cable Microflex Octopus'],
    [77, 'Flexible flat cable Microflex Octopus'],
    [102, 'Flexible flat cable Microflex Female-Female'],
    [118, 'Flexible flat cable Microflex Female-Female'],
    [166, 'Flexible flat cable Microflex Male-Female'],
    [182, 'Flexible flat cable Microflex Male-Female'],
    [244, 'CMM320 LF & Mixed Series 3 rows'],
    [270, 'CMM340 Series 3 rows']
];
let text;

//------------------------------------------------
api.start(function () {
api.addEventListener('viewerready', () => {
    // api.getNodeMap(function(err, nodes) {
    //     if (!err) {window.console.log(nodes); }
    // });
    api.addEventListener('nodeMouseEnter', function (info) {
            for (let i = 0; i < TObj.length; i++) {
                if (TObj[i][0] == info.instanceID) {
                    // text = TObj[i][1];
                    var popup = document.getElementById('popup');
                    var popupText = document.getElementById('popup-text');
                    // console.log(info.position2D[0], info.position2D[1])
                    // popupText.innerText = text;
                    popupText.innerText = TObj[i][1];
                    popup.style.left = info.position2D[0] + 70 + 'px';
                    popup.style.top = info.position2D[1] + 300 + 'px';
                    popup.style.display = 'block';
                };
            };
            // console.log('nodeMouseEnter', info);
    }, {pick: 'fast' });


    api.addEventListener('nodeMouseLeave', function (info) {popup.style.display = 'none';}, {pick: 'fast'});

    api.addEventListener('click',function(info) { 
    if (info.instanceID) {  // le clic se fait effectivement sur un objet 
        window.console.log('clicked node', info.instanceID);
        if ((info.instanceID == 464) || (info.instanceID == 527)) { 
            window.open('rect.html', '_blank');
        }
    }
    }); 

}); // api.addEventListener('viewerready'
}); // api.start(
};


