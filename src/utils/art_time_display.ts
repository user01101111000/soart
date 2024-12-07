const art_time_display: (s: number, e: number) => string = (s: number, e: number): string => {

    if (s == e) return s.toString();

    return "" + s + " - " + e;
}

export default art_time_display;