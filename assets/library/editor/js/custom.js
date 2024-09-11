tinymce.PluginManager.add('link', function(editor, url) {
    function createLinkList() {
        return function() {
            editor.windowManager.open({
                title: 'Chèn liên kết',
                url: "/admin/editor/link",
                width: 450,
                height: 280
            });
        };
    }
    editor.addButton('link', {
        icon: 'link',
        tooltip: 'Chèn liên kết',
        onclick: createLinkList(),
        stateSelector: 'a[href]'
    });

    editor.addButton('unlink', {
        icon: 'unlink',
        tooltip: 'Remove link',
        cmd: 'unlink',
        stateSelector: 'a[href]'
    });

    editor.addMenuItem('link', {
        icon: 'link',
        text: 'Chèn liên kết',
        shortcut: 'Meta+K',
        onclick: createLinkList(),
        stateSelector: 'a[href]',
        context: 'insert',
        prependToContext: true
    });
    editor.addShortcut('Meta+K', '', createLinkList());
    editor.addCommand('mceLink', createLinkList());
});

tinymce.PluginManager.add('image', function(editor, url) {
    function createImageList() {
        return function() {
            editor.windowManager.open({
                title: 'Thư viện ảnh',
                url: '/admin/editor/image',
                width: 900,
                height: 600
            },{
                post_id : $('#post_id').val(),
                title: $('#title').val(),
            });
        };
    }
    // function createSlideList() {
    //     return function() {
    //         var editor = top.tinymce.activeEditor, selection = editor.selection, dom = editor.dom;
    //         var myNode = selection.getNode();
    //         if($(myNode).hasClass('exp_tinyslide')) {
    //             alert(selection.getNode().innerHTML);
    //         }
    //         else {
    //             editor.execCommand('mceInsertRawHTML', false, '<div class="exp_tinyslide expNoEdit"><div id="id_of_tinyslide" class="exp_wrap expEdit">&nbsp;</div></div>');
    //             editor.undoManager.add();
    //             editor.save();
    //             dom.get('id_of_tinyslide').focus();
    //             dom.setAttrib('id_of_tinyslide', 'id', null);
    //             editor.addVisual();
    //             editor.windowManager.open({
    //                 title: 'Chèn hình ảnh',
    //                 url: '/admin/editor/image',
    //                 width: 800,
    //                 height: 550
    //             });
    //         }
    //     };
    // }
    function createBox_2_image() {
        return function() {
            var editor = top.tinymce.activeEditor, selection = editor.selection, dom = editor.dom;
            editor.execCommand('mceInsertRawHTML', false, '<div class="exp_box_2_image expNoEdit"><div id="id_of_box" class="exp_wrap expEdit"><figure class="expNoEdit"><img src="/library/editor/img/no-photo.png" width="500" height="375" /></figure><figure class="expNoEdit"><img src="/library/editor/img/no-photo.png" width="500" height="375" /></figure></div></div>');
            editor.undoManager.add();
            editor.save();
            dom.get('id_of_box').focus();
            dom.setAttrib('id_of_box', 'id', null);
            editor.addVisual();
            // editor.windowManager.open({
            //     title: 'Chèn hình ảnh',
            //     url: '/admin/editor/image',
            //     width: 800,
            //     height: 550
            // });
        };
    }
    function createBox_3_image() {
         return function() {
            var editor = top.tinymce.activeEditor, selection = editor.selection, dom = editor.dom;
            editor.execCommand('mceInsertRawHTML', false, '<div class="exp_box_3_image expNoEdit"><div id="id_of_box" class="exp_wrap expEdit"><figure class="expNoEdit"><img src="/library/editor/img/no-photo.png" width="500" height="375" /></figure><figure class="expNoEdit"><img src="/library/editor/img/no-photo.png" width="500" height="375" /></figure><figure class="expNoEdit"><img src="/library/editor/img/no-photo.png" width="500" height="375" /></figure></div></div>');
            editor.undoManager.add();
            editor.save();
            dom.get('id_of_box').focus();
            dom.setAttrib('id_of_box', 'id', null);
            editor.addVisual();
            // editor.windowManager.open({
            //     title: 'Chèn hình ảnh',
            //     url: '/admin/editor/image',
            //     width: 800,
            //     height: 550
            // });
        };
    }

    editor.addButton('image', {
        icon: 'image',
        tooltip: 'Chèn hình ảnh',
        stateSelector: 'figure.image',
        onclick: createImageList()
    });
    editor.addMenuItem('image', {
        icon: 'image',
        text: 'Chèn hình ảnh',
        context: 'insert',
        prependToContext: true,
        onclick: createImageList()
    });
    // editor.addMenuItem('insert_slide', {
	// 	icon: 'image',
	// 	text: 'Chèn slide',
	// 	context: 'insert',
	// 	prependToContext: true,
    //     onclick: createSlideList()
	// });
    editor.addMenuItem('box_2_image', {
        icon: 'options',
        text: 'Hộp 2 ảnh',
        context: 'insert',
        prependToContext: true,
        onclick: createBox_2_image()
    });
    editor.addMenuItem('box_3_image', {
        icon: 'options',
        text: 'Hộp 3 ảnh',
        context: 'insert',
        prependToContext: true,
        onclick: createBox_3_image()
    });

});


tinymce.PluginManager.add('editimage', function(editor, url) {
    function createEditImage() {
        return function() {
            editor.windowManager.open({
                title: 'Sửa hình ảnh',
                url: '/admin/editor/image',
                width: 550,
                height: 560
            });
        };
    }
});

tinymce.PluginManager.add('media', function(editor, url) {
    function createMediaList() {
        return function() {
            editor.windowManager.open({
                title: 'Chèn video',
                url: '/admin/editor/video',
                width: 800,
                height: 550
            });
        };
    }
    editor.addButton('media', {
        icon: 'media',
        tooltip: 'Chèn video',
        stateSelector: 'iframe.exp_video',
        onclick: createMediaList()
    });
    editor.addMenuItem('media', {
        icon: 'media',
        text: 'Chèn video',
        context: 'insert',
        prependToContext: true,
        onclick: createMediaList()
    });

});

tinymce.PluginManager.add('pdf', function(editor, url) {
    function createPdf() {
        return function() {
            editor.windowManager.open({
                title: 'Chèn pdf',
                url: '/admin/editor/pdf',
                width: 500,
                height: 350
            });
        };
    }
    editor.addButton('pdf', {
        icon: 'pdf',
        tooltip: 'Chèn pdf',
        stateSelector: 'iframe.file-pdf',
        onclick: createPdf()
    });
    editor.addMenuItem('pdf', {
        icon: 'pdf',
        text: 'Chèn pdf',
        context: 'insert',
        prependToContext: true,
        onclick: createPdf()
    });

});

tinymce.PluginManager.add('attack', function(editor, url) {
    function createAttack() {
        return function() {
            editor.windowManager.open({
                title: 'attack file',
                url: '/admin/editor/attack',
                width: 500,
                height: 350
            });
        };
    }
    editor.addButton('attack', {
        icon: 'attack',
        tooltip: 'attack file',
        stateSelector: 'iframe.file-pdf',
        onclick: createAttack()
    });
    editor.addMenuItem('attack', {
        icon: 'attack',
        text: 'attack file',
        context: 'insert',
        prependToContext: true,
        onclick: createAttack()
    });

});

tinymce.PluginManager.add('views', function(editor, url) {
    function Preview() {
        return function() {
            editor.windowManager.open({
                title: 'Xem trước',
                url: '/admin/editor/preview',
                width: 850,
                height: 550
            },{
                title: $('#title').val(),
                description: $('#news-description').val(),
                content:  $('#content').val(),
            });
        };
    }
    editor.addButton('preview', {
        icon: 'preview',
        tooltip: 'Xem trước',
        onclick: Preview()
    });


});


tinymce.PluginManager.add('quote', function(editor, url) {
    function createQuoteList() {
        return function() {
            editor.windowManager.open({
                title: 'Chèn trích dẫn',
                url: '/admin/editor/quote',
                width: 450,
                height: 350
            });
        };
    }
    editor.addMenuItem('quote', {
        icon: 'blockquote',
        text: 'Chèn trích dẫn',
        context: 'insert',
        prependToContext: true,
        onclick: createQuoteList()
    });
});


tinymce.PluginManager.add('quote_box', function(editor, url) {
    function createQuoteBox() {
        return function() {
            editor.windowManager.open({
                title: 'Chèn hộp tin trích dẫn',
                url: '/admin/editor/quote-box',
                width: 400,
                height: 375
            });
        };
    }
    editor.addMenuItem('quote_box', {
        icon: 'blockquote',
        text: 'Chèn hộp tin trích dẫn',
        context: 'insert',
        prependToContext: true,
        onclick: createQuoteBox()
    });
});

tinymce.PluginManager.add('live', function(editor, url) {
    function createLive() {
        return function() {
            editor.windowManager.open({
                title: 'Chèn ND trực tiếp',
                url: '/admin/editor/live-content',
                width: 450,
                height: 350
            });
        };
    }
    editor.addMenuItem('live', {
        icon: 'gamma',
        text: 'Chèn ND trực tiếp',
        context: 'insert',
        prependToContext: true,
        onclick: createLive()
    });
});

tinymce.PluginManager.add('info', function(editor, url) {
    function createInfoList() {
        return function() {
            editor.windowManager.open({
                title: 'Chèn box thông tin',
                url: '/admin/editor/info-editor',
                width: 450,
                height: 350
            });
        };
    }
    editor.addMenuItem('info', {
        icon: 'flipv',
        text: 'Chèn box thông tin',
        context: 'insert',
        prependToContext: true,
        onclick: createInfoList()
    });
});
tinymce.PluginManager.add('vote', function(editor, url) {
    function createVoteList() {
        return function() {
            editor.windowManager.open({
                title: 'Chèn bình chọn',
                url: '/admin/editor/vote-editor',
                width: 400,
                height: 425
            });
        };
    }
    editor.addMenuItem('vote', {
		icon: 'anchor',
		text: 'Chèn bình chọn',
		context: 'insert',
		prependToContext: true,
        onclick: createVoteList()
	});
});


tinymce.PluginManager.add('box_tho', function(editor, url) {
    function createThoList() {
        return function() {
            editor.windowManager.open({
                title: 'Chèn box thông tin',
                url: '/admin/editor/box-tho',
                width: 450,
                height: 350
            });
        };
    }
    editor.addMenuItem('box_tho', {
        icon: 'flipv',
        text: 'Chèn box thơ',
        context: 'insert',
        prependToContext: true,
        onclick: createThoList()
    });
});
tinymce.PluginManager.add('block', function(editor, url) {
    function createBlockList() {
        return function() {
            editor.windowManager.open({
                title: 'Chèn Box tin nên đọc',
                url: '/admin/editor/box-block',
                width: 500,
                height: 550
            });
        };
    }
    editor.addButton('block', {
		icon: 'options',
		tooltip: 'Chèn Box tin nên đọc',
        stateSelector: 'div.giaminh_related_261',
		onclick: createBlockList()
	});
    editor.addMenuItem('block', {
		icon: 'options',
		text: 'Chèn Box tin nên đọc',
		context: 'insert',
        shortcut: 'Meta+O',
		prependToContext: true,
        onclick: createBlockList()
	});
    editor.addShortcut('Meta+O', '', createBlockList());
});


tinymce.PluginManager.add('generals', function(editor, url) {
    function createBlockList() {
        return function() {
            editor.windowManager.open({
                title: 'Nhúng tướng vào bài viết',
                url: '/admin/editor/box-generals',
                width: 500,
                height: 550
            });
        };
    }
    editor.addButton('generals', {
		icon: 'generals',
		tooltip: 'Nhúng tướng vào bài viết',
        stateSelector: 'div.giaminh_generals_261',
		onclick: createBlockList()
	});
    editor.addMenuItem('generals', {
		icon: 'generals',
		text: 'Nhúng tướng vào bài viết',
		context: 'insert',
        shortcut: 'Meta+T',
		prependToContext: true,
        onclick: createBlockList()
	});
    editor.addShortcut('Meta+T', '', createBlockList());
});

tinymce.PluginManager.add('wpnews', function(editor, url) {
    function createBlockList() {
        return function() {
            editor.windowManager.open({
                title: 'Nhúng bài viết liên quan vào bài viết',
                url: '/admin/editor/box-wpnews',
                width: 500,
                height: 550
            });
        };
    }
    editor.addButton('wpnews', {
		icon: 'wpnews',
		tooltip: 'Nhúng bài viết liên quan vào bài viết',
        stateSelector: 'div.giaminh_wpnews_261',
		onclick: createBlockList()
	});
    editor.addMenuItem('wpnews', {
		icon: 'wpnews',
		text: 'Nhúng bài viết liên quan vào bài viết',
		context: 'insert',
        shortcut: 'Meta+G',
		prependToContext: true,
        onclick: createBlockList()
	});
    editor.addShortcut('Meta+G', '', createBlockList());
});
tinymce.PluginManager.add('spoiler', function(editor, url) {
    function createSpoiler() {
        return function() {
            var editor = top.tinymce.activeEditor, selection = editor.selection, dom = editor.dom;
            editor.execCommand('mceInsertRawHTML', false, '<div class="expNoEdit"><div class="expEdit spoiler">[spoiler]&nbsp;[/spoiler]</div></div>');
            editor.undoManager.add();
            editor.save();
        }
    }
    editor.addButton('spoiler', {
		icon: 'spoiler',
		tooltip: 'Nội dung ẩn bớt',
        stateSelector: 'div.giaminh_spoiler_261',
		onclick: createSpoiler()
	});
    editor.addMenuItem('spoiler', {
		icon: 'spoiler',
		text: 'Nội dung ẩn bớt',
		context: 'insert',
        shortcut: 'Meta+H',
		prependToContext: true,
        onclick: createSpoiler()
	});
    editor.addShortcut('Meta+H', '', createSpoiler());
});

tinymce.PluginManager.add('giftcode', function(editor, url) {
    function createBlockList() {
        return function() {
            editor.windowManager.open({
                title: 'Nhúng gift code cho game',
                url: '/admin/editor/box-giftcode',
                width: 500,
                height: 550
            });
        };
    }
    editor.addButton('giftcode', {
		icon: 'giftcode',
		tooltip: 'Nhúng gift code cho game',
        stateSelector: 'div.giaminh_giftcode_261',
		onclick: createBlockList()
	});
    editor.addMenuItem('giftcode', {
		icon: 'giftcode',
		text: 'Nhúng gift code cho game',
		context: 'insert',
        shortcut: 'Meta+J',
		prependToContext: true,
        onclick: createBlockList()
	});
    editor.addShortcut('Meta+J', '', createBlockList());
});