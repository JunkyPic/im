document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        document.getElementById('im_btn_resources').addEventListener('click', function () {
            document.getElementById('im_buildings').style.display = 'none';
            document.getElementById('im_resources').style.display = 'block';
        });
        document.getElementById('im_btn_buildings').addEventListener('click', function () {
            document.getElementById('im_buildings').style.display = 'block';
            document.getElementById('im_resources').style.display = 'none';
        });
    }
};