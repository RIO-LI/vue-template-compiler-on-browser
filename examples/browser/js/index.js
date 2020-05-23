document.addEventListener('DOMContentLoaded', function () {
    $.get(location.href + '/components/tree.vue').then(function (code) {
        try {
            var codeObj = vtc.parseComponent(code);
            var $codeBox = $('#code-box');
            console.warn(codeObj);
            var styleCode = codeObj.styles[0].content;
            var styleLang = codeObj.styles[0].lang;
            var styleScoped = codeObj.styles[0].scoped ? 'scoped' : '';
            var templateCode = codeObj.template.content;
            var scriptCode = codeObj.script.content;
            var styleType = codeObj.styles[0].type;
            var templateType = codeObj.template.type;
            var scriptType = codeObj.script.type;



            var renderLang = Prism.languages[templateType] ? Prism.languages[templateType] : Prism.languages.html;
            var html = Prism.highlight(beautifier.html('<template>' + templateCode + '</template>'), renderLang, templateType);
            $codeBox.append('<pre>' + html + '</pre>');



            var scriptRenderLang = Prism.languages[scriptType] ? Prism.languages[scriptType] : Prism.languages.javascript;
            var scriptHtml = Prism.highlight(beautifier.html('<script>' + scriptCode + '</script>'), scriptRenderLang, scriptType);
            $codeBox.append('<pre>' + scriptHtml + '</pre>');


            var styleRenderLang = Prism.languages[styleType] ? Prism.languages[styleType] : Prism.languages.css;
            var prevCssHtml = Prism.highlight(beautifier.html( '<style lang="'+ styleLang +'" ' + styleScoped +'>'), Prism.languages.html, 'html');
            var cssHtml = Prism.highlight(beautifier.css(styleCode), styleRenderLang, styleType);
            var afterCssHtml = Prism.highlight(beautifier.html( '</style>'), Prism.languages.html, 'html');
            $codeBox.append('<pre>' + prevCssHtml + '</pre>');
            $codeBox.append('<pre>' + cssHtml + '</pre>');
            $codeBox.append('<pre>' + afterCssHtml + '</pre>');

            $('#box').append('<button type="button" class="copy-code-btn">复制代码</button>');
            $('#box').on('mouseover', function () {
                $('.copy-code-btn').show();
            }).on('mouseleave', function () {
                $('.copy-code-btn').hide();
            });
            var clipboard = new ClipboardJS('.copy-code-btn', {
                target: function () {
                    return $('#code-box').get(0);
                }
            });
            clipboard.on('success', function (e) {
                e.clearSelection();
            });
        } catch (e) {
            console.error(e);
        }
    })
})