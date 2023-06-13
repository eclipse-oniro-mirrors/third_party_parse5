/** All valid namespaces in HTML. */
export enum NS {
    HTML = 'http://www.w3.org/1999/xhtml',
    MATHML = 'http://www.w3.org/1998/Math/MathML',
    SVG = 'http://www.w3.org/2000/svg',
    XLINK = 'http://www.w3.org/1999/xlink',
    XML = 'http://www.w3.org/XML/1998/namespace',
    XMLNS = 'http://www.w3.org/2000/xmlns/',
}

export enum ATTRS {
    TYPE = 'type',
    ACTION = 'action',
    ENCODING = 'encoding',
    PROMPT = 'prompt',
    NAME = 'name',
    COLOR = 'color',
    FACE = 'face',
    SIZE = 'size',
}

/**
 * The mode of the document.
 *
 * @see {@link https://dom.spec.whatwg.org/#concept-document-limited-quirks}
 */
export enum DOCUMENT_MODE {
    NO_QUIRKS = 'no-quirks',
    QUIRKS = 'quirks',
    LIMITED_QUIRKS = 'limited-quirks',
}

export enum TAG_NAMES {
    A = 'a',
    ADDRESS = 'address',
    ANNOTATION_XML = 'annotation-xml',
    APPLET = 'applet',
    AREA = 'area',
    ARTICLE = 'article',
    ASIDE = 'aside',

    B = 'b',
    BASE = 'base',
    BASEFONT = 'basefont',
    BGSOUND = 'bgsound',
    BIG = 'big',
    BLOCKQUOTE = 'blockquote',
    BODY = 'body',
    BR = 'br',
    BUTTON = 'button',

    CAPTION = 'caption',
    CENTER = 'center',
    CODE = 'code',
    COL = 'col',
    COLGROUP = 'colgroup',

    DD = 'dd',
    DESC = 'desc',
    DETAILS = 'details',
    DIALOG = 'dialog',
    DIR = 'dir',
    DIV = 'div',
    DL = 'dl',
    DT = 'dt',

    EM = 'em',
    EMBED = 'embed',

    FIELDSET = 'fieldset',
    FIGCAPTION = 'figcaption',
    FIGURE = 'figure',
    FONT = 'font',
    FOOTER = 'footer',
    FOREIGN_OBJECT = 'foreignObject',
    FORM = 'form',
    FRAME = 'frame',
    FRAMESET = 'frameset',

    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
    HEAD = 'head',
    HEADER = 'header',
    HGROUP = 'hgroup',
    HR = 'hr',
    HTML = 'html',

    I = 'i',
    IMG = 'img',
    IMAGE = 'image',
    INPUT = 'input',
    IFRAME = 'iframe',

    KEYGEN = 'keygen',

    LABEL = 'label',
    LI = 'li',
    LINK = 'link',
    LISTING = 'listing',

    MAIN = 'main',
    MALIGNMARK = 'malignmark',
    MARQUEE = 'marquee',
    MATH = 'math',
    MENU = 'menu',
    META = 'meta',
    MGLYPH = 'mglyph',
    MI = 'mi',
    MO = 'mo',
    MN = 'mn',
    MS = 'ms',
    MTEXT = 'mtext',

    NAV = 'nav',
    NOBR = 'nobr',
    NOFRAMES = 'noframes',
    NOEMBED = 'noembed',
    NOSCRIPT = 'noscript',

    OBJECT = 'object',
    OL = 'ol',
    OPTGROUP = 'optgroup',
    OPTION = 'option',

    P = 'p',
    PARAM = 'param',
    PLAINTEXT = 'plaintext',
    PRE = 'pre',

    RB = 'rb',
    RP = 'rp',
    RT = 'rt',
    RTC = 'rtc',
    RUBY = 'ruby',

    S = 's',
    SCRIPT = 'script',
    SECTION = 'section',
    SELECT = 'select',
    SOURCE = 'source',
    SMALL = 'small',
    SPAN = 'span',
    STRIKE = 'strike',
    STRONG = 'strong',
    STYLE = 'style',
    SUB = 'sub',
    SUMMARY = 'summary',
    SUP = 'sup',

    TABLE = 'table',
    TBODY = 'tbody',
    TEMPLATE = 'template',
    TEXTAREA = 'textarea',
    TFOOT = 'tfoot',
    TD = 'td',
    TH = 'th',
    THEAD = 'thead',
    TITLE = 'title',
    TR = 'tr',
    TRACK = 'track',
    TT = 'tt',

    U = 'u',
    UL = 'ul',

    SVG = 'svg',

    VAR = 'var',

    WBR = 'wbr',

    XMP = 'xmp',
// Unique self closing label
    WEB = 'web',
    XCOMPONENT = 'xcomponent',
    RATING = 'rating',
    CANVAS = 'canvas',
    CAMERA = 'camera',
    AUDIO = 'audio',
    VIDEO = 'video',
    SWITCH = 'switch',
    QRCODE = 'qrcode',
    PICKER_VIEW = 'picker-view',
    PICKER = 'picker',
    PROGRESS = 'progress',
    SEARCH = 'search',
    SLIDER = 'slider',
    CHART = 'chart',
    CALENDAR = 'calendar',
    DIVIDER = 'divider',
    IMAGE_ANIMATOR = 'image-animator',
}

/**
 * Tag IDs are numeric IDs for known tag names.
 *
 * We use tag IDs to improve the performance of tag name comparisons.
 */
export enum TAG_ID {
    UNKNOWN,

    A,
    ADDRESS,
    ANNOTATION_XML,
    APPLET,
    AREA,
    ARTICLE,
    ASIDE,

    B,
    BASE,
    BASEFONT,
    BGSOUND,
    BIG,
    BLOCKQUOTE,
    BODY,
    BR,
    BUTTON,

    CAPTION,
    CENTER,
    CODE,
    COL,
    COLGROUP,

    DD,
    DESC,
    DETAILS,
    DIALOG,
    DIR,
    DIV,
    DL,
    DT,

    EM,
    EMBED,

    FIELDSET,
    FIGCAPTION,
    FIGURE,
    FONT,
    FOOTER,
    FOREIGN_OBJECT,
    FORM,
    FRAME,
    FRAMESET,

    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    HEAD,
    HEADER,
    HGROUP,
    HR,
    HTML,

    I,
    IMG,
    IMAGE,
    INPUT,
    IFRAME,

    KEYGEN,

    LABEL,
    LI,
    LINK,
    LISTING,

    MAIN,
    MALIGNMARK,
    MARQUEE,
    MATH,
    MENU,
    META,
    MGLYPH,
    MI,
    MO,
    MN,
    MS,
    MTEXT,

    NAV,
    NOBR,
    NOFRAMES,
    NOEMBED,
    NOSCRIPT,

    OBJECT,
    OL,
    OPTGROUP,
    OPTION,

    P,
    PARAM,
    PLAINTEXT,
    PRE,

    RB,
    RP,
    RT,
    RTC,
    RUBY,

    S,
    SCRIPT,
    SECTION,
    SELECT,
    SOURCE,
    SMALL,
    SPAN,
    STRIKE,
    STRONG,
    STYLE,
    SUB,
    SUMMARY,
    SUP,

    TABLE,
    TBODY,
    TEMPLATE,
    TEXTAREA,
    TFOOT,
    TD,
    TH,
    THEAD,
    TITLE,
    TR,
    TRACK,
    TT,

    U,
    UL,

    SVG,

    VAR,

    WBR,

    XMP,
    WEB,
    XCOMPONENT,
    RATING,
    CANVAS,
    CAMERA,
    AUDIO,
    VIDEO,
    SWITCH,
    QRCODE,
    PICKER_VIEW,
    PICKER,
    PROGRESS,
    SEARCH,
    SLIDER,
    CHART,
    CALENDAR,
    DIVIDER,
    IMAGE_ANIMATOR,
}

const TAG_NAME_TO_ID = new Map<string, TAG_ID>([
    [TAG_NAMES.A, TAG_ID.A],
    [TAG_NAMES.ADDRESS, TAG_ID.ADDRESS],
    [TAG_NAMES.ANNOTATION_XML, TAG_ID.ANNOTATION_XML],
    [TAG_NAMES.APPLET, TAG_ID.APPLET],
    [TAG_NAMES.AREA, TAG_ID.AREA],
    [TAG_NAMES.ARTICLE, TAG_ID.ARTICLE],
    [TAG_NAMES.ASIDE, TAG_ID.ASIDE],
    [TAG_NAMES.B, TAG_ID.B],
    [TAG_NAMES.BASE, TAG_ID.BASE],
    [TAG_NAMES.BASEFONT, TAG_ID.BASEFONT],
    [TAG_NAMES.BGSOUND, TAG_ID.BGSOUND],
    [TAG_NAMES.BIG, TAG_ID.BIG],
    [TAG_NAMES.BLOCKQUOTE, TAG_ID.BLOCKQUOTE],
    [TAG_NAMES.BODY, TAG_ID.BODY],
    [TAG_NAMES.BR, TAG_ID.BR],
    [TAG_NAMES.BUTTON, TAG_ID.BUTTON],
    [TAG_NAMES.CAPTION, TAG_ID.CAPTION],
    [TAG_NAMES.CENTER, TAG_ID.CENTER],
    [TAG_NAMES.CODE, TAG_ID.CODE],
    [TAG_NAMES.COL, TAG_ID.COL],
    [TAG_NAMES.COLGROUP, TAG_ID.COLGROUP],
    [TAG_NAMES.DD, TAG_ID.DD],
    [TAG_NAMES.DESC, TAG_ID.DESC],
    [TAG_NAMES.DETAILS, TAG_ID.DETAILS],
    [TAG_NAMES.DIALOG, TAG_ID.DIALOG],
    [TAG_NAMES.DIR, TAG_ID.DIR],
    [TAG_NAMES.DIV, TAG_ID.DIV],
    [TAG_NAMES.DL, TAG_ID.DL],
    [TAG_NAMES.DT, TAG_ID.DT],
    [TAG_NAMES.EM, TAG_ID.EM],
    [TAG_NAMES.EMBED, TAG_ID.EMBED],
    [TAG_NAMES.FIELDSET, TAG_ID.FIELDSET],
    [TAG_NAMES.FIGCAPTION, TAG_ID.FIGCAPTION],
    [TAG_NAMES.FIGURE, TAG_ID.FIGURE],
    [TAG_NAMES.FONT, TAG_ID.FONT],
    [TAG_NAMES.FOOTER, TAG_ID.FOOTER],
    [TAG_NAMES.FOREIGN_OBJECT, TAG_ID.FOREIGN_OBJECT],
    [TAG_NAMES.FORM, TAG_ID.FORM],
    [TAG_NAMES.FRAME, TAG_ID.FRAME],
    [TAG_NAMES.FRAMESET, TAG_ID.FRAMESET],
    [TAG_NAMES.H1, TAG_ID.H1],
    [TAG_NAMES.H2, TAG_ID.H2],
    [TAG_NAMES.H3, TAG_ID.H3],
    [TAG_NAMES.H4, TAG_ID.H4],
    [TAG_NAMES.H5, TAG_ID.H5],
    [TAG_NAMES.H6, TAG_ID.H6],
    [TAG_NAMES.HEAD, TAG_ID.HEAD],
    [TAG_NAMES.HEADER, TAG_ID.HEADER],
    [TAG_NAMES.HGROUP, TAG_ID.HGROUP],
    [TAG_NAMES.HR, TAG_ID.HR],
    [TAG_NAMES.HTML, TAG_ID.HTML],
    [TAG_NAMES.I, TAG_ID.I],
    [TAG_NAMES.IMG, TAG_ID.IMG],
    [TAG_NAMES.IMAGE, TAG_ID.IMAGE],
    [TAG_NAMES.INPUT, TAG_ID.INPUT],
    [TAG_NAMES.IFRAME, TAG_ID.IFRAME],
    [TAG_NAMES.KEYGEN, TAG_ID.KEYGEN],
    [TAG_NAMES.LABEL, TAG_ID.LABEL],
    [TAG_NAMES.LI, TAG_ID.LI],
    [TAG_NAMES.LINK, TAG_ID.LINK],
    [TAG_NAMES.LISTING, TAG_ID.LISTING],
    [TAG_NAMES.MAIN, TAG_ID.MAIN],
    [TAG_NAMES.MALIGNMARK, TAG_ID.MALIGNMARK],
    [TAG_NAMES.MARQUEE, TAG_ID.MARQUEE],
    [TAG_NAMES.MATH, TAG_ID.MATH],
    [TAG_NAMES.MENU, TAG_ID.MENU],
    [TAG_NAMES.META, TAG_ID.META],
    [TAG_NAMES.MGLYPH, TAG_ID.MGLYPH],
    [TAG_NAMES.MI, TAG_ID.MI],
    [TAG_NAMES.MO, TAG_ID.MO],
    [TAG_NAMES.MN, TAG_ID.MN],
    [TAG_NAMES.MS, TAG_ID.MS],
    [TAG_NAMES.MTEXT, TAG_ID.MTEXT],
    [TAG_NAMES.NAV, TAG_ID.NAV],
    [TAG_NAMES.NOBR, TAG_ID.NOBR],
    [TAG_NAMES.NOFRAMES, TAG_ID.NOFRAMES],
    [TAG_NAMES.NOEMBED, TAG_ID.NOEMBED],
    [TAG_NAMES.NOSCRIPT, TAG_ID.NOSCRIPT],
    [TAG_NAMES.OBJECT, TAG_ID.OBJECT],
    [TAG_NAMES.OL, TAG_ID.OL],
    [TAG_NAMES.OPTGROUP, TAG_ID.OPTGROUP],
    [TAG_NAMES.OPTION, TAG_ID.OPTION],
    [TAG_NAMES.P, TAG_ID.P],
    [TAG_NAMES.PARAM, TAG_ID.PARAM],
    [TAG_NAMES.PLAINTEXT, TAG_ID.PLAINTEXT],
    [TAG_NAMES.PRE, TAG_ID.PRE],
    [TAG_NAMES.RB, TAG_ID.RB],
    [TAG_NAMES.RP, TAG_ID.RP],
    [TAG_NAMES.RT, TAG_ID.RT],
    [TAG_NAMES.RTC, TAG_ID.RTC],
    [TAG_NAMES.RUBY, TAG_ID.RUBY],
    [TAG_NAMES.S, TAG_ID.S],
    [TAG_NAMES.SCRIPT, TAG_ID.SCRIPT],
    [TAG_NAMES.SECTION, TAG_ID.SECTION],
    [TAG_NAMES.SELECT, TAG_ID.SELECT],
    [TAG_NAMES.SOURCE, TAG_ID.SOURCE],
    [TAG_NAMES.SMALL, TAG_ID.SMALL],
    [TAG_NAMES.SPAN, TAG_ID.SPAN],
    [TAG_NAMES.STRIKE, TAG_ID.STRIKE],
    [TAG_NAMES.STRONG, TAG_ID.STRONG],
    [TAG_NAMES.STYLE, TAG_ID.STYLE],
    [TAG_NAMES.SUB, TAG_ID.SUB],
    [TAG_NAMES.SUMMARY, TAG_ID.SUMMARY],
    [TAG_NAMES.SUP, TAG_ID.SUP],
    [TAG_NAMES.TABLE, TAG_ID.TABLE],
    [TAG_NAMES.TBODY, TAG_ID.TBODY],
    [TAG_NAMES.TEMPLATE, TAG_ID.TEMPLATE],
    [TAG_NAMES.TEXTAREA, TAG_ID.TEXTAREA],
    [TAG_NAMES.TFOOT, TAG_ID.TFOOT],
    [TAG_NAMES.TD, TAG_ID.TD],
    [TAG_NAMES.TH, TAG_ID.TH],
    [TAG_NAMES.THEAD, TAG_ID.THEAD],
    [TAG_NAMES.TITLE, TAG_ID.TITLE],
    [TAG_NAMES.TR, TAG_ID.TR],
    [TAG_NAMES.TRACK, TAG_ID.TRACK],
    [TAG_NAMES.TT, TAG_ID.TT],
    [TAG_NAMES.U, TAG_ID.U],
    [TAG_NAMES.UL, TAG_ID.UL],
    [TAG_NAMES.SVG, TAG_ID.SVG],
    [TAG_NAMES.VAR, TAG_ID.VAR],
    [TAG_NAMES.WBR, TAG_ID.WBR],
    [TAG_NAMES.XMP, TAG_ID.XMP],
    [TAG_NAMES.WEB, TAG_ID.WEB],
    [TAG_NAMES.XCOMPONENT, TAG_ID.XCOMPONENT],
    [TAG_NAMES.RATING, TAG_ID.RATING],
    [TAG_NAMES.CANVAS, TAG_ID.CANVAS],
    [TAG_NAMES.CAMERA, TAG_ID.CAMERA],
    [TAG_NAMES.AUDIO, TAG_ID.AUDIO],
    [TAG_NAMES.VIDEO, TAG_ID.VIDEO],
    [TAG_NAMES.SWITCH, TAG_ID.SWITCH],
    [TAG_NAMES.QRCODE, TAG_ID.QRCODE],
    [TAG_NAMES.PICKER_VIEW, TAG_ID.PICKER_VIEW],
    [TAG_NAMES.PICKER, TAG_ID.PICKER],
    [TAG_NAMES.PROGRESS, TAG_ID.PROGRESS],
    [TAG_NAMES.SEARCH, TAG_ID.SEARCH],
    [TAG_NAMES.SLIDER, TAG_ID.SLIDER],
    [TAG_NAMES.CHART, TAG_ID.CHART],
    [TAG_NAMES.CALENDAR, TAG_ID.CALENDAR],
    [TAG_NAMES.DIVIDER, TAG_ID.DIVIDER],
    [TAG_NAMES.IMAGE_ANIMATOR, TAG_ID.IMAGE_ANIMATOR],
]);

export function getTagID(tagName: string): TAG_ID {
    return TAG_NAME_TO_ID.get(tagName) ?? TAG_ID.UNKNOWN;
}

const $ = TAG_ID;

export const SPECIAL_ELEMENTS: Record<NS, Set<TAG_ID>> = {
    [NS.HTML]: new Set([
        $.ADDRESS,
        $.APPLET,
        $.AREA,
        $.ARTICLE,
        $.ASIDE,
        $.BASE,
        $.BASEFONT,
        $.BGSOUND,
        $.BLOCKQUOTE,
        $.BODY,
        $.BR,
        $.BUTTON,
        $.CAPTION,
        $.CENTER,
        $.COL,
        $.COLGROUP,
        $.DD,
        $.DETAILS,
        $.DIR,
        $.DIV,
        $.DL,
        $.DT,
        $.EMBED,
        $.FIELDSET,
        $.FIGCAPTION,
        $.FIGURE,
        $.FOOTER,
        $.FORM,
        $.FRAME,
        $.FRAMESET,
        $.H1,
        $.H2,
        $.H3,
        $.H4,
        $.H5,
        $.H6,
        $.HEAD,
        $.HEADER,
        $.HGROUP,
        $.HR,
        $.HTML,
        $.IFRAME,
        $.IMG,
        $.INPUT,
        $.LI,
        $.LINK,
        $.LISTING,
        $.MAIN,
        $.MARQUEE,
        $.MENU,
        $.META,
        $.NAV,
        $.NOEMBED,
        $.NOFRAMES,
        $.NOSCRIPT,
        $.OBJECT,
        $.OL,
        $.P,
        $.PARAM,
        $.PLAINTEXT,
        $.PRE,
        $.SCRIPT,
        $.SECTION,
        $.SELECT,
        $.SOURCE,
        $.STYLE,
        $.SUMMARY,
        $.TABLE,
        $.TBODY,
        $.TD,
        $.TEMPLATE,
        $.TEXTAREA,
        $.TFOOT,
        $.TH,
        $.THEAD,
        $.TITLE,
        $.TR,
        $.TRACK,
        $.UL,
        $.WBR,
        $.XMP,
        $.WEB,
        $.XCOMPONENT,
        $.RATING,
        $.CANVAS,
        $.CAMERA,
        $.AUDIO,
        $.VIDEO,
        $.SWITCH,
        $.QRCODE,
        $.PICKER_VIEW,
        $.PICKER,
        $.PROGRESS,
        $.SEARCH,
        $.SLIDER,
        $.CHART,
        $.CALENDAR,
        $.DIVIDER,
        $.IMAGE_ANIMATOR,
    ]),
    [NS.MATHML]: new Set([$.MI, $.MO, $.MN, $.MS, $.MTEXT, $.ANNOTATION_XML]),
    [NS.SVG]: new Set([$.TITLE, $.FOREIGN_OBJECT, $.DESC]),
    [NS.XLINK]: new Set(),
    [NS.XML]: new Set(),
    [NS.XMLNS]: new Set(),
};

export function isNumberedHeader(tn: TAG_ID): boolean {
    return tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6;
}

const UNESCAPED_TEXT = new Set<string>([
    TAG_NAMES.STYLE,
    TAG_NAMES.SCRIPT,
    TAG_NAMES.XMP,
    TAG_NAMES.IFRAME,
    TAG_NAMES.NOEMBED,
    TAG_NAMES.NOFRAMES,
    TAG_NAMES.PLAINTEXT,
]);

export function hasUnescapedText(tn: string, scriptingEnabled: boolean): boolean {
    return UNESCAPED_TEXT.has(tn) || (scriptingEnabled && tn === TAG_NAMES.NOSCRIPT);
}
