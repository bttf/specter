function createTaggedDraft (){
			var key = titleContainer.val();
        	var draft = {};
            draft["time"] = new Date();
        	draft["text"] = getMarkdownText();
        	draft["wordCount"] =getWordCountFromLabel(wordCountLabel.text());
			draft["tags"] = tags.val();
        	localStorage.setItem(key, JSON.stringify(draft));
		}
				
				$("#tags").tagsInput({'defaultText':' Click to add tags','height':'0px','onAddTag':function(param){
					saveCurrentDraft(titleContainer.text());
				},'onRemoveTag':function(param){
					saveCurrentDraft(titleContainer.text());
				}
									 });
				var options = {
					
	link_list:  false,    // render links as references, create link list as appendix
	h1_setext:  false,     // underline h1 headers
	h2_setext:  false,     // underline h2 headers
	h_atx_suf:  true,    // header suffixes (###)
	gfm_code:   true,    // gfm code blocks (```)
	li_bullet:  "*",      // list item bullet style
	hr_char:    "-",      // hr style
	indnt_str:  "    ",   // indentation string
	bold_char:  "*",      // char used for strong
	emph_char:  "_",      // char used for em
	gfm_del:    true,     // ~~strikeout~~ for <del>strikeout</del>
	gfm_tbls:   true,     // markdown-extra tables
	tbl_edges:  false,    // show side edges on tables
	hash_lnks:  true,    // anchors w/hash hrefs as links
	br_only:    false,    // avoid using "  " as line break indicator
};
	
	var reMarker = new reMarked(options);
	
	var markdown = reMarker.render($('#previewPane').html());				
				
	$("#editArea").val(markdown).trigger('autosize');
	