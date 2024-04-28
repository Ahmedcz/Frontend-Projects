// Not needed in a static maps view using IFrame in HTML

 function initMap() {
    fetch('')
    .then(response => {
        if(!response.ok){
            throw new OverconstrainedError ('Network Response was not ok !');
        }

        return response.json;
    })
    
    .then(data => {
        const map = new.google.maps.Map(document.getElementById('map'), {
            center: { lat: data.latitude, lng: data.latitude },
            zoom: data.zoomLevel,
        });
    });

   .catch(error => {
    console.error('Error initializing Map: ', error);
   });
} 



<script>
  function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 50.04767032834682, lng: 14.355072443220774 },
      zoom: 15,
    });

    const marker = new google.maps.Marker({
      position: { lat: 50.04767032834682, lng: 14.355072443220774 },
      map: map,
      icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png', // URL to your custom marker icon
    });
  }
</script>