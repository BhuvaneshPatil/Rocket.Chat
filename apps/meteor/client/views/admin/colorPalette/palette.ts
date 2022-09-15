export const palette = [
	{
		category: 'Background',
		list: [
			{ name: 'light', token: 'white', color: '#FFFFFF', isDark: false },
			{ name: 'tint', token: 'N100', color: '#F7F8FA', isDark: false },
		],
	},
	{
		category: 'Stroke',
		description: "Use as component's outline, stroke, deviders",
		list: [
			{ name: 'extra-light', token: 'N200', color: '#F2F3F5', isDark: false },
			{ name: 'light', token: 'N500', color: '#CBCED1', isDark: false },
			{ name: 'medium', token: 'N600', color: '#9EA2A8', isDark: false },
			{ name: 'dark', token: 'N700', color: '#6C727A', isDark: true },
			{ name: 'extra-dark', token: 'N800', color: '#2F343D', isDark: true },
			{ name: 'extra-light-highlight', token: 'P200', color: '#D1EBFE', isDark: false },
			{ name: 'highlight', token: 'P500', color: '#156FF5', isDark: true },
			{ name: 'extra-light-error', token: 'D200', color: '#FFC1C9', isDark: false },
			{ name: 'error', token: 'D500', color: '#EC0D2A', isDark: true },
		],
	},
	{
		category: 'Surface',
		description: 'Use as a container on top of the background',
		list: [
			{ name: 'light', token: 'white', color: '#FFFFFF', isDark: false },
			{ name: 'tint', token: 'N100', color: '#F7F8FA', isDark: false },
			{ name: 'neutral', token: 'N400', color: '#E4E7EA', isDark: false },
			{ name: 'hover', token: 'N400', color: '#E4E7EA', isDark: false },
			{ name: 'disabled', token: 'N100', color: '#F7F8FA', isDark: false },
		],
	},
	{
		category: 'Font',
		description: 'These should be applied according to surfaces',
		list: [
			{ name: 'white', token: 'white', color: '#FFFFFF', isDark: false },
			{ name: 'default', token: 'N800', color: '#2F343D', isDark: true },
			{ name: 'titles-labels', token: 'N900', color: '#1F2329', isDark: true },
			{ name: 'disabled', token: 'N500', color: '#CBCED1', isDark: false },
			{ name: 'annotation', token: 'N600', color: '#9EA2A8', isDark: false },
			{ name: 'hint', token: 'N700', color: '#6C727A', isDark: true },
			{ name: 'secondary-info', token: 'N700', color: '#6C727A', isDark: true },
			{ name: 'info', token: 'P600', color: '#095AD2', isDark: true },
			{ name: 'danger', token: 'D600', color: '#D40C26', isDark: true },
		],
	},
	{
		category: 'Status',
		description: 'Status Background',
		list: [
			{ name: 'status-info', token: 'P200', color: '#D1EBFE', isDark: false },
			{ name: 'status-success', token: 'S500', color: '#C0F6E4', isDark: false },
			{ name: 'status-warning', token: 'W200', color: '#FFECAD', isDark: false },
			{ name: 'status-danger', token: 'D200', color: '#FFC1C9', isDark: false },
			{ name: 'status-service-1', token: 'S1-200', color: '#FAD1B0', isDark: false },
			{ name: 'status-service-2', token: 'S2-200', color: '#EDD0F7', isDark: false },
		],
	},
	{
		description: 'Status Font',
		list: [
			{ name: 'status-font-on-info', token: 'P600', color: '#095AD2', isDark: true },
			{ name: 'status-font-on-success', token: 'S800', color: '#148660', isDark: true },
			{ name: 'status-font-on-warning', token: 'W900', color: '#8E6300', isDark: true },
			{ name: 'status-font-on-danger', token: 'D800', color: '#9B1325', isDark: true },
			{ name: 'status-font-on-service-1', token: 'S1-800', color: '#974809', isDark: true },
			{ name: 'status-font-on-service-2', token: 'S2-600', color: '#7F1B9F', isDark: true },
		],
	},
	{
		category: 'Button',
		description: 'Primary Background',
		list: [
			{ name: 'button-primary-default', token: 'P500', color: '#156FF5', isDark: true },
			{ name: 'button-primary-hover', token: 'P600', color: '#095AD2', isDark: true },
			{ name: 'button-primary-focus', token: 'P500', color: '#156FF5', isDark: true },
			{ name: 'button-primary-keyfocus', token: 'P500', color: '#156FF5', isDark: true },
			{ name: 'button-primary-press', token: 'P700', color: '#095AD2', isDark: true },
			{ name: 'button-primary-disabled', token: 'P200', color: '#D1EBFE', isDark: false },
		],
	},
	{
		description: 'Secondary Background',
		list: [
			{ name: 'button-secondary-default', token: 'N400', color: '#E4E7EA', isDark: false },
			{ name: 'button-secondary-hover', token: 'N500', color: '#CBCED1', isDark: false },
			{ name: 'button-secondary-focus', token: 'N400', color: '#E4E7EA', isDark: false },
			{ name: 'button-secondary-keyfocus', token: 'N400', color: '#E4E7EA', isDark: false },
			{ name: 'button-secondary-press', token: 'N600', color: '#CBCED1', isDark: false },
			{ name: 'button-secondary-disabled', token: 'N300', color: '#EEEFF1', isDark: false },
		],
	},
	{
		description: 'Secondary Background',
		list: [
			{ name: 'button-secondary-default', token: 'N400', color: '#E4E7EA', isDark: false },
			{ name: 'button-secondary-hover', token: 'N500', color: '#CBCED1', isDark: false },
			{ name: 'button-secondary-focus', token: 'N400', color: '#E4E7EA', isDark: false },
			{ name: 'button-secondary-keyfocus', token: 'N400', color: '#E4E7EA', isDark: false },
			{ name: 'button-secondary-press', token: 'N600', color: '#CBCED1', isDark: false },
			{ name: 'button-secondary-disabled', token: 'N300', color: '#EEEFF1', isDark: false },
		],
	},
	{
		description: 'Secondary Danger Background',
		list: [
			{ name: 'button-secondary-danger-default', token: 'N400', color: '#E4E7EA', isDark: false },
			{ name: 'button-secondary-danger-hover', token: 'N500', color: '#CBCED1', isDark: false },
			{ name: 'button-secondary-danger-focus', token: 'N400', color: '#E4E7EA', isDark: false },
			{ name: 'button-secondary-danger-keyfocus', token: 'N400', color: '#E4E7EA', isDark: false },
			{ name: 'button-secondary-danger-press', token: 'N600', color: '#CBCED1', isDark: false },
			{ name: 'button-secondary-danger-disabled', token: 'N300', color: '#EEEFF1', isDark: false },
		],
	},
	{
		description: 'Danger Background',
		list: [
			{ name: 'button-danger-default', token: 'D500', color: '#EC0D2A', isDark: true },
			{ name: 'button-danger-hover', token: 'D600', color: '#D40C26', isDark: true },
			{ name: 'button-danger-focus', token: 'D500', color: '#EC0D2A', isDark: true },
			{ name: 'button-danger-keyfocus', token: 'D500', color: '#EC0D2A', isDark: true },
			{ name: 'button-danger-press', token: 'D700', color: '#BB0B21', isDark: true },
			{ name: 'button-danger-disabled', token: 'D200', color: '#FFC1C9', isDark: false },
		],
	},
	{
		description: 'Font',
		list: [
			{ name: 'button-font-on-primary', token: 'white', color: '#FFFFFF', isDark: false },
			{ name: 'button-font-on-secondary', token: 'N900', color: '#1F2329', isDark: true },
			{ name: 'button-font-on-secondary-danger', token: 'D900', color: '#BB0B21', isDark: true },
			{ name: 'button-font-on-danger', token: 'white', color: '#FFFFFF', isDark: false },
			{ name: 'button-font-on-primary-disabled', token: 'white', color: '#FFFFFF', isDark: false },
			{ name: 'button-font-on-secondary-disabled', token: 'N600', color: '#9EA2A8', isDark: false },
			{ name: 'button-font-on-secondary-danger-disabled', token: 'D300', color: '#F98F9D', isDark: false },
			{ name: 'button-font-on-danger-disabled', token: 'white', color: '#FFFFFF', isDark: false },
		],
	},
];
