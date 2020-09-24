// event pada saat link di click (Navbar)
$('.page-scroling').on('click', function(e) {
    
    // ambil isi href
    var hrefs = $(this).attr('href');
    // console.log(hrefs);

    // tangkap element 
    var eleHrefs = $(hrefs);
    // console.log(eleHrefs.offset().top);

    $('html, body').animate({
        scrollTop: eleHrefs.offset().top -50
    }, 2000, 'easeInOutBack');
    
    e.preventDefault();

});
