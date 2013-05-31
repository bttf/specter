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
        replaceAllImagesWithFigure(previewHtml);
        previewPaneView.html(markdown.toHTML(markdownText));
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
    
    $('img').replaceWith(function(){
        
        var figure = '<figure><img src="'+$(this).src+'"><figcaption>'+$(this).attr('alt')+'</figcaption></figure>';
        return figure;
    });
}
var editArea = prepareInitialWorkSpace();

    