export let theme = {
	name: "css-variables",
	type: "css",
	colors: {
		"editor.foreground": "#000001",
		"editor.background": "#000002",
		"terminal.ansiBlack": "#A00000",
		"terminal.ansiRed": "#A00001",
		"terminal.ansiGreen": "#A00002",
		"terminal.ansiYellow": "#A00003",
		"terminal.ansiBlue": "#A00004",
		"terminal.ansiMagenta": "#A00005",
		"terminal.ansiCyan": "#A00006",
		"terminal.ansiWhite": "#A00007",
		"terminal.ansiBrightBlack": "#A00008",
		"terminal.ansiBrightRed": "#A00009",
		"terminal.ansiBrightGreen": "#A00010",
		"terminal.ansiBrightYellow": "#A00011",
		"terminal.ansiBrightBlue": "#A00012",
		"terminal.ansiBrightMagenta": "#A00013",
		"terminal.ansiBrightCyan": "#A00014",
		"terminal.ansiBrightWhite": "#A00015"
	},
	tokenColors: [
		{
			settings: {
				foreground: "#000001"
			}
		},
		{
			scope: ["markup.deleted", "meta.diff.header.from-file", "punctuation.definition.deleted"],
			settings: {
				foreground: "#ef6270"
			}
		},
		{
			scope: ["markup.inserted", "meta.diff.header.to-file", "punctuation.definition.inserted"],
			settings: {
				foreground: "#4bb74a"
			}
		},
		{
			scope: ["keyword.operator.accessor", "meta.group.braces.round.function.arguments", "meta.template.expression", "markup.fenced_code meta.embedded.block"],
			settings: {
				foreground: "#000001"
			}
		},
		{
			scope: "emphasis",
			settings: {
				fontStyle: "italic"
			}
		},
		{
			scope: ["strong", "markup.heading.markdown", "markup.bold.markdown"],
			settings: {
				fontStyle: "bold"
			}
		},
		{
			scope: ["markup.italic.markdown"],
			settings: {
				fontStyle: "italic"
			}
		},
		{
			scope: "meta.link.inline.markdown",
			settings: {
				fontStyle: "underline",
				foreground: "#000004"
			}
		},
		{
			scope: ["string", "markup.fenced_code", "markup.inline"],
			settings: {
				foreground: "#000005"
			}
		},
		{
			scope: ["comment", "string.quoted.docstring.multi"],
			settings: {
				foreground: "#000006"
			}
		},
		{
			scope: [
				"constant.numeric",
				"constant.language",
				"constant.other.placeholder",
				"constant.character.format.placeholder",
				"variable.language.this",
				"variable.other.object",
				"variable.other.class",
				"variable.other.constant",
				"meta.property-name",
				"meta.property-value",
				"support"
			],
			settings: {
				foreground: "#000004"
			}
		},
		{
			scope: [
				"keyword",
				"storage.modifier",
				"storage.type",
				"storage.control.clojure",
				"entity.name.function.clojure",
				"entity.name.tag.yaml",
				"support.function.node",
				"support.type.property-name.json",
				"punctuation.separator.key-value",
				"punctuation.definition.template-expression"
			],
			settings: {
				foreground: "#000007"
			}
		},
		{
			scope: "variable.parameter.function",
			settings: {
				foreground: "#000008"
			}
		},
		{
			scope: [
				"support.function",
				"entity.name.type",
				"entity.other.inherited-class",
				"meta.function-call",
				"meta.instance.constructor",
				"entity.other.attribute-name",
				"entity.name.function",
				"constant.keyword.clojure"
			],
			settings: {
				foreground: "#000009"
			}
		},
		{
			scope: ["entity.name.tag", "string.quoted", "string.regexp", "string.interpolated", "string.template", "string.unquoted.plain.out.yaml", "keyword.other.template"],
			settings: {
				foreground: "#000010"
			}
		},
		{
			scope: ["punctuation.definition.arguments", "punctuation.definition.dict", "punctuation.separator", "meta.function-call.arguments"],
			settings: {
				foreground: "#000011"
			}
		},
		{
			name: "[Custom] Markdown links",
			scope: ["markup.underline.link", "punctuation.definition.metadata.markdown"],
			settings: {
				foreground: "#000012"
			}
		},
		{
			name: "[Custom] Markdown list",
			scope: ["beginning.punctuation.definition.list.markdown"],
			settings: {
				foreground: "#000005"
			}
		},
		{
			name: "[Custom] Markdown punctuation definition brackets",
			scope: ["punctuation.definition.string.begin.markdown", "punctuation.definition.string.end.markdown", "string.other.link.title.markdown", "string.other.link.description.markdown"],
			settings: {
				foreground: "#000007"
			}
		}
	]
}
