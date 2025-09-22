import React, {useEffect, useRef} from 'react';
import {language, cmtheme} from '../../src/atoms';
import {useRecoilValue} from 'recoil';
import ACTIONS from '../actions/Actions';

// CODE MIRROR
import Codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';

// theme
import 'codemirror/theme/monokai.css';

// modes
import 'codemirror/mode/css/css';
import 'codemirror/mode/dart/dart';
import 'codemirror/mode/django/django';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/python/python';
import 'codemirror/mode/r/r';
import 'codemirror/mode/sql/sql';
import 'codemirror/mode/xml/xml';

// features
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/scroll/simplescrollbars.css';

//search
import 'codemirror/addon/search/search.js';
import 'codemirror/addon/search/searchcursor.js';
import 'codemirror/addon/search/jump-to-line.js';
import 'codemirror/addon/dialog/dialog.js';
import 'codemirror/addon/dialog/dialog.css';

const Editor = ({socketRef, roomId, onCodeChange}) => {

    const editorRef = useRef(null);
    const lang = useRecoilValue(language);
    const editorTheme = useRecoilValue(cmtheme);

    useEffect(() => {
        async function init() {
            editorRef.current = Codemirror.fromTextArea(
                document.getElementById('realtimeEditor'),
                {
                    mode: {name: lang},
                    theme: editorTheme,
                    autoCloseTags: true,
                    autoCloseBrackets: true,
                    lineNumbers: true,
                }
            );

            editorRef.current.on('change', (instance, changes) => {
                const {origin} = changes;
                const code = instance.getValue();
                onCodeChange(code);
                if (origin !== 'setValue') {
                    socketRef.current.emit(ACTIONS.CODE_CHANGE, {
                        roomId,
                        code,
                    });
                }
            });

        }
        init();
    }, [lang]);

    useEffect(() => {
        if (socketRef.current) {
            socketRef.current.on(ACTIONS.CODE_CHANGE, ({code}) => {
                if (code !== null) {
                    editorRef.current.setValue(code);
                }
            });
        }

        return () => {
            socketRef.current.off(ACTIONS.CODE_CHANGE);
        };
    }, [socketRef.current]);

    return (
        <textarea id="realtimeEditor"></textarea>
    );
};

export default Editor;