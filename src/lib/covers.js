function svgUrl(markup) {
	return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(markup)}`;
}

function vhsCover({ title, kicker, year, bg, ink, accent, art }) {
	return svgUrl(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 474 900" preserveAspectRatio="none">
		<rect width="474" height="900" fill="${bg}"/>
		<rect x="18" y="18" width="438" height="864" fill="none" stroke="${ink}" stroke-width="2"/>
		<text x="237" y="56" text-anchor="middle" fill="${accent}" font-family="Georgia, serif" font-size="13" letter-spacing="3">A PROJECT BY ANTON NAGEH</text>
		<text x="40" y="130" fill="${ink}" font-family="Georgia, serif" font-size="42" font-weight="700">${escapeXml(title)}</text>
		<text x="40" y="162" fill="${accent}" font-family="system-ui, sans-serif" font-size="13" letter-spacing="2">${escapeXml(kicker).toUpperCase()}</text>
		<g transform="translate(40,210)">${art}</g>
		<rect x="40" y="820" width="70" height="28" fill="none" stroke="${ink}" stroke-width="2"/>
		<text x="75" y="840" text-anchor="middle" fill="${ink}" font-family="system-ui, sans-serif" font-size="12" font-weight="700">VHS</text>
		<text x="430" y="840" text-anchor="end" fill="${ink}" font-family="system-ui, sans-serif" font-size="16" letter-spacing="2">${year}</text>
	</svg>`);
}

function vhsSpine({ title, year, bg, ink, accent }) {
	const short = title.length > 14 ? `${title.slice(0, 13)}.` : title;
	return svgUrl(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 900" preserveAspectRatio="none">
		<rect width="160" height="900" fill="${bg}"/>
		<rect x="10" y="10" width="140" height="880" fill="none" stroke="${ink}" stroke-width="2"/>
		<circle cx="80" cy="70" r="18" fill="${accent}"/>
		<text x="80" y="520" fill="${ink}" font-family="Georgia, serif" font-size="28" font-weight="700" text-anchor="middle" transform="rotate(-90 80 520)">${escapeXml(short)}</text>
		<text x="80" y="780" fill="${accent}" font-family="system-ui, sans-serif" font-size="14" font-weight="700" text-anchor="middle">ANTON</text>
		<rect x="45" y="800" width="70" height="26" fill="none" stroke="${ink}" stroke-width="2"/>
		<text x="80" y="818" text-anchor="middle" fill="${ink}" font-family="system-ui, sans-serif" font-size="11" font-weight="700">VHS</text>
		<text x="80" y="860" text-anchor="middle" fill="${ink}" font-family="system-ui, sans-serif" font-size="12">${year}</text>
	</svg>`);
}

function escapeXml(s) {
	return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

const ARTS = {
	car: `<g fill="none" stroke="currentColor" stroke-width="8">
		<path d="M20 220 L70 150 H310 L380 220 V280 H20 Z"/>
		<circle cx="90" cy="280" r="34" fill="#EDEBE6"/>
		<circle cx="310" cy="280" r="34" fill="#EDEBE6"/>
		<path d="M140 150 L160 90 H250 L280 150"/>
	</g>`,
	warehouse: `<g fill="none" stroke="currentColor" stroke-width="8">
		<path d="M40 280 L200 80 L360 280 V420 H40 Z"/>
		<rect x="160" y="300" width="80" height="120"/>
		<rect x="70" y="250" width="70" height="50"/>
		<rect x="260" y="250" width="70" height="50"/>
	</g>`,
	lock: `<g fill="none" stroke="currentColor" stroke-width="8">
		<rect x="110" y="180" width="180" height="160" rx="12"/>
		<path d="M150 180 V130 a50 50 0 0 1 100 0 V180"/>
		<circle cx="200" cy="255" r="16"/>
	</g>`,
	film: `<g fill="none" stroke="currentColor" stroke-width="8">
		<rect x="40" y="80" width="320" height="280"/>
		<rect x="70" y="110" width="90" height="70"/>
		<rect x="180" y="110" width="90" height="70"/>
		<rect x="70" y="210" width="90" height="70"/>
		<rect x="180" y="210" width="90" height="70"/>
		<circle cx="310" cy="145" r="18"/>
		<circle cx="310" cy="245" r="18"/>
	</g>`,
	burger: `<g fill="none" stroke="currentColor" stroke-width="8">
		<path d="M80 180 Q200 80 320 180"/>
		<rect x="80" y="190" width="240" height="28"/>
		<rect x="80" y="234" width="240" height="22"/>
		<path d="M80 280 Q200 330 320 280"/>
	</g>`,
	perfume: `<g fill="none" stroke="currentColor" stroke-width="8">
		<rect x="170" y="70" width="60" height="50"/>
		<rect x="155" y="120" width="90" height="30"/>
		<path d="M120 150 H280 L260 360 H140 Z"/>
	</g>`,
	sat: `<g fill="none" stroke="currentColor" stroke-width="8">
		<circle cx="200" cy="220" r="70"/>
		<circle cx="200" cy="220" r="18"/>
		<rect x="40" y="190" width="70" height="60"/>
		<rect x="290" y="190" width="70" height="60"/>
		<path d="M110 220 H130 M270 220 H290"/>
		<circle cx="320" cy="90" r="10"/>
	</g>`,
	book: `<g fill="none" stroke="currentColor" stroke-width="8">
		<path d="M80 80 V360 L200 320 V80 Z"/>
		<path d="M320 80 V360 L200 320"/>
		<path d="M200 80 V320"/>
	</g>`,
	face: `<g fill="none" stroke="currentColor" stroke-width="8">
		<circle cx="200" cy="180" r="90"/>
		<circle cx="170" cy="160" r="8"/>
		<circle cx="230" cy="160" r="8"/>
		<path d="M170 220 Q200 250 230 220"/>
		<rect x="80" y="300" width="240" height="80"/>
	</g>`,
	hotel: `<g fill="none" stroke="currentColor" stroke-width="8">
		<rect x="90" y="80" width="220" height="320"/>
		<rect x="170" y="300" width="60" height="100"/>
		<rect x="120" y="120" width="40" height="40"/>
		<rect x="180" y="120" width="40" height="40"/>
		<rect x="240" y="120" width="40" height="40"/>
		<rect x="120" y="190" width="40" height="40"/>
		<rect x="180" y="190" width="40" height="40"/>
		<rect x="240" y="190" width="40" height="40"/>
	</g>`,
	chart: `<g fill="none" stroke="currentColor" stroke-width="8">
		<path d="M60 360 V80 H360"/>
		<rect x="90" y="220" width="50" height="140"/>
		<rect x="160" y="160" width="50" height="200"/>
		<rect x="230" y="120" width="50" height="240"/>
		<rect x="300" y="200" width="50" height="160"/>
	</g>`,
	cube: `<g fill="none" stroke="currentColor" stroke-width="8">
		<path d="M200 80 L340 150 V300 L200 370 L60 300 V150 Z"/>
		<path d="M200 80 V230"/>
		<path d="M60 150 L200 230 L340 150"/>
	</g>`,
	side: `<g fill="none" stroke="currentColor" stroke-width="8">
		<rect x="40" y="280" width="340" height="40"/>
		<rect x="80" y="160" width="70" height="120"/>
		<circle cx="250" cy="220" r="40"/>
		<rect x="310" y="200" width="50" height="80"/>
	</g>`
};

export function makeArt(id, spec) {
	const art = (ARTS[spec.motif] || ARTS.cube).replace(/currentColor/g, spec.ink);
	return {
		cover: vhsCover({ ...spec, art }),
		spine: vhsSpine(spec)
	};
}
