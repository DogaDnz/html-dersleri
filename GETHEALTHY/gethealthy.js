function showPage(pageId) {
    // Tüm sayfaları gizle
    var pages = document.getElementsByClassName('page');
    for (var i = 0; i < pages.length; i++) {
      pages[i].style.display = 'none';
    }
  
    // İlgili sayfayı göster
    var pageToShow = document.getElementById(pageId);
    if (pageToShow) {
      pageToShow.style.display = 'block';
    }
  }