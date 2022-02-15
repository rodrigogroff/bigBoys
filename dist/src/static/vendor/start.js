function theChampLoadEvent(e) {
    var t = window.onload;
    if (typeof window.onload != "function") {
        window.onload = e
    } else {
        window.onload = function () {
            t();
            e()
        }
    }
}
var settingsGlobal = {	"tajtl": "Home portfolio" },
    theChampDefaultLang = 'en_US',
    theChampCloseIconPath = '/src/static/img/close.png',
    theChampSiteUrl = '',
    theChampVerified = 0,
    theChampEmailPopup = 0,
     theChampFBKey = '',
    theChampFBLang = 'en_US',
    theChampFbLikeMycred = 0,
    theChampSsga = 0,
    theChampCommentNotification = 0,
    theChampHeateorFcmRecentComments = 0,
    theChampFbIosLogin = 0,
     theChampFBCommentUrl = '',
     theChampFBCommentColor = '',
     theChampFBCommentNumPosts = '',
     theChampFBCommentWidth = '100%',
     theChampFBCommentOrderby = '',
     theChampCommentingTabs = "wordpress,facebook,disqus",
    theChampGpCommentsUrl = '',
    theChampDisqusShortname = '',
    theChampScEnabledTabs = 'wordpress,fb',
    theChampScLabel = 'Leave a reply',
    theChampScTabLabels = {
        "wordpress": "Default Comments (0)",
        "fb": "Facebook Comments",
        "disqus": "Disqus Comments"
    },
    theChampGpCommentsWidth = 0,
    theChampCommentingId = 'respond',
    theChampSharingAjaxUrl = '',
    heateorSsFbMessengerAPI = '',
    heateorSsWhatsappShareAPI = 'web',
    heateorSsUrlCountFetched = [],
    heateorSsSharesText = 'Shares',
    heateorSsShareText = 'Share',
    theChampPluginIconPath = '',
    theChampHorizontalSharingCountEnable = 0,
    theChampVerticalSharingCountEnable = 0,
    theChampSharingOffset = -10,
    theChampCounterOffset = -10,
    theChampMobileStickySharingEnabled = 1,
    heateorSsCopyLinkMessage = "Link copied.",
    heateorSsHorSharingShortUrl = "",
    heateorSsVerticalSharingShortUrl = "",
    LS_Meta = {
        "v": "6.11.6",
        "fixGSAP": "1"
    },
    GALLERY_DTA_FRONT = {
        "IMAGES_URL": "",
        "LOOK_AND_FEEL": "7b7b7b"
    }; //"https:\/\/skywarriorthemes.com\/gameaddict\/wp-content\/plugins\/sk_isotope_gallery\/images",