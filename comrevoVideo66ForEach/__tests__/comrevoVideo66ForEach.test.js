import { createElement } from 'lwc';
import ComrevoVideo66ForEach from 'c/comrevoVideo66ForEach';

describe('c-comrevo-video66-for-each', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-comrevo-video66-for-each', {
            is: ComrevoVideo66ForEach
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});