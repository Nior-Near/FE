// Type definitions
type SuccessCallback = () => void;
type ErrorCallback = (error: Error) => void;

interface CopyOptions {
    onSuccess?: SuccessCallback;
    onError?: ErrorCallback;
}

// Main function
export const copyToClipboard = async (
    text: string,
    options: CopyOptions = {}
): Promise<void> => {
    // Default callbacks
    const {
        onSuccess = () => console.log('Text copied'),
        onError = (err: Error) => console.error('Copy failed:', err)
    } = options;

    try {
        // Modern approach: Navigator Clipboard API
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            onSuccess();
            return;
        }

        // Fallback 1: execCommand with textarea
        const textArea: HTMLTextAreaElement = document.createElement('textarea');
        textArea.value = text;

        // Prevent auto-zoom on mobile
        textArea.style.fontSize = '12pt';

        // Make it invisible
        const textAreaStyles: Partial<CSSStyleDeclaration> = {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '2em',
            height: '2em',
            padding: '0',
            border: 'none',
            outline: 'none',
            boxShadow: 'none',
            background: 'transparent'
        };

        Object.assign(textArea.style, textAreaStyles);

        document.body.appendChild(textArea);

        // Handle iOS devices
        if (navigator.userAgent.match(/ipad|iphone/i)) {
            textArea.contentEditable = 'true';
            textArea.readOnly = false;

            const range: Range = document.createRange();
            range.selectNodeContents(textArea);

            const selection: Selection | null = window.getSelection();
            if (selection) {
                selection.removeAllRanges();
                selection.addRange(range);
                textArea.setSelectionRange(0, 999999);
            }
        } else {
            textArea.select();
        }

        try {
            // Execute copy command
            const successful: boolean = document.execCommand('copy');
            if (successful) {
                onSuccess();
            } else {
                throw new Error('Copy command failed');
            }
        } catch (err) {
            throw new Error(`Copy failed: ${err instanceof Error ? err.message : String(err)}`);
        } finally {
            // Cleanup
            document.body.removeChild(textArea);
        }
    } catch (err) {
        onError(err instanceof Error ? err : new Error(String(err)));
    }
};