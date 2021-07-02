window.onload = function(){
    $('#timeline').timelinev({

        // container element
        timelineDiv:   $(this),
        
        // selector of timeline content
        containerDivs:   '.timelineCont',
        
        // selector of date
        dateDiv:     '.date',
        
        // selector of event details
        textDiv:     '.text',
        
        // HTML markup for dates
        dateHtml:      'h2',
        
        // HTML markup for details
        textHtml:      'p',
        
        // active class
        dateActiveClass: '.active',
        
        // animation speed
        datesSpeed:      '750'
        
        });
}