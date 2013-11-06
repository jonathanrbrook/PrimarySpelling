angular.module("Spelling").factory("spellingList",
    function () {
        return { getList : function (listName){
            switch (listName) {
                case 'year3List6':
                    return [{spelling:'want'},
                        {spelling:'watch'},
                        {spelling:'play'},
                        {spelling:'happen'},
                        {spelling:'wish'},
                        {spelling:'pull'},
                        {spelling:'fix'},
                        {spelling:'help'},
                        {spelling:'enjoy'},
                        {spelling:'look'},
                        {spelling:'jump'},
                        {spelling:'float'}];
                    break;
                case 'year2List6':
                    return [{spelling:'say'},
                        {spelling:'pay'},
                        {spelling:'hay'},
                        {spelling:'play'}];
                    break;
                default:
                    return [{spelling:'List unknown'}];
                }
            }
        }
    }
);