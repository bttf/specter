function prepareInitialWorkSpace() {

        var editArea = $("#editArea");
        editArea.autosize();
        titleContainer.focus();
        return editArea;

    }

    function hideThis(elements) {

        $(elements.join(',')).hide();
    }

    function showThis(elements) {
        
       $(elements.join(',')).show();
    }

    function getMarkdownText() {
        return editArea.val();
    }

    function getWordCount(text) {

        return text.split(/\s+\b/).length;
    }

    function setHtmlinPreviewPane(markdownText) {
        wordCountLabel.text('words: ' + getWordCount(markdownText));
        var previewHtml = markdown.toHTML(markdownText);
        previewPaneView.html(replaceAllImagesWithFigure(previewHtml));
    }

    function setRawHtml() {

        previewPaneView.text(previewPaneView.html());
    }

    function setPlain() {
        previewPaneView.html(previewPaneView.text());
    }


    function getWordCountFromLabel(text) {

        return text.match(/\d+/)[0];
    }


    function validateInputOnFousOut() {

        var isTitleEmpty = titleContainer.val().trim() === '';
        var isDraftEmpty = editAreaView.val() === '';
        var hasTitileAndDraft = !isTitleEmpty && !isDraftEmpty;
        return hasTitileAndDraft;

    }


function replaceAllImagesWithFigure(html){
    
    var parsedHtml = $(html);    
    
    $('img',parsedHtml).replaceWith(function(){
        var alt = $(this).attr('alt');
       return '<figure><img src="'+$(this).attr('src')+'" alt="'+alt+'"><figcaption>'+alt+'</figcaption></figure>';
        
    });
    
  return parsedHtml;   
}

function getItemsToPost(){
    
    var html = previewPaneView.html();
    var image = getCoverImage(html);
    var item = {
        
        postHtml: html,
        wordCount :getWordCountFromLabel(wordCountLabel.text()),
        title : titleContainer.val(),
        secret :secret.val(),
        imgSrc : image.src,
        caption : image.alt
    }
    
    console.log(item);
    return item;
}

function publishArticle(){
    
    $.post('/addpost',getItemsToPost(),function(data){
        
        console.log(data);
    });
}

function getCoverImage(html){
    
    var parsedHtml =$(html);
    return  $('img',parsedHtml)[0];
};

var editArea = prepareInitialWorkSpace();

    