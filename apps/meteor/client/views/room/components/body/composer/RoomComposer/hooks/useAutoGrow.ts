import { useBorderBoxSize } from '@rocket.chat/fuselage-hooks';
import type { CSSProperties, RefObject } from 'react';
import { useEffect, useState } from 'react';

const shadowStyleBase: CSSProperties = {
	position: 'fixed',
	top: '-10000px',
	left: '-10000px',
	resize: 'none',
	whiteSpace: 'pre-wrap',
	wordWrap: 'break-word',
};

export const useAutoGrow = (
	ref: RefObject<HTMLTextAreaElement>,
	shadowRef: RefObject<HTMLTextAreaElement>,
): {
	textAreaStyle: CSSProperties;
	shadowStyle: CSSProperties;
} => {
	const [style, setStyle] = useState(() => ref.current && window.getComputedStyle(ref.current));

	useEffect(() => {
		const { current: textarea } = ref;

		if (!textarea) {
			return;
		}
		setStyle(() => ref.current && window.getComputedStyle(ref.current));
	}, [ref]);

	useEffect(() => {
		const { current: textarea } = ref;

		if (!textarea) {
			return;
		}

		const handleInput = () => {
			const { value } = textarea;
			const { current: shadow } = shadowRef;
			if (!shadow) {
				return;
			}
			shadow.innerHTML = value
				.replace(/&/g, '&amp;')
				.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;')
				.replace(/\n$/, '<br/>&nbsp;')
				.replace(/\n/g, '<br/>');
		};

		textarea.addEventListener('input', handleInput);
		return () => {
			textarea.removeEventListener('input', handleInput);
		};
	}, [ref, shadowRef]);

	const shadowContentSize = useBorderBoxSize(shadowRef, {
		debounceDelay: 10,
	});

	const composerContentSize = useBorderBoxSize(ref);

	return {
		textAreaStyle: {
			whiteSpace: 'pre-wrap',
			wordWrap: 'break-word',
			overflowY: shadowContentSize.blockSize > parseInt(style?.maxHeight || '0') ? 'scroll' : 'hidden',
			...(shadowContentSize.blockSize && {
				height: `${shadowContentSize.blockSize}px`,
			}),
		},
		shadowStyle: {
			...shadowStyleBase,
			font: style?.font,
			width: composerContentSize.inlineSize,
			minHeight: style?.lineHeight,
			lineHeight: style?.lineHeight,
		},
	};
};
