class ActionFactory {
    static asNew(classSuffix) {
        return eval('new Action' + classSuffix);
    }

    static asStatic(classSuffix) {
        return 'Action' + classSuffix;
    }
}
