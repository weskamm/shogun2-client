/*eslint max-len: [0, 80, 4]*/
Ext.Loader.syncRequire(['ShogunClient.util.ApplicationContext']);

describe('ShogunClient.util.ApplicationContext', function() {

    var clazz = ShogunClient.util.ApplicationContext;

    describe('Basics', function() {
        it('is defined', function() {
            expect(clazz).to.not.be(undefined);
        });
    });

    describe('All necessary parameters set', function() {
        it('appContextUrl', function() {
            expect(clazz.pathConfig.appContextUrl).to.be.a('string');
        });
    });

    describe('Static methods', function() {
        describe('#loadApplicationContext', function() {
            it('is defined', function() {
                expect(clazz.loadApplicationContext).to.not.be(undefined);
            });
            it('is a function', function() {
                expect(clazz.loadApplicationContext).to.be.a('function');
            });
            it('returns undefined if no callback function is given', function() {
                expect(clazz.loadApplicationContext()).to.be(undefined);
            });
        });
        describe('#getValue', function() {
            it('is defined', function() {
                expect(clazz.getValue).to.not.be(undefined);
            });
            it('is a function', function() {
                expect(clazz.getValue).to.be.a('function');
            });
            it('returns a key by a query key', function() {
                expect(clazz.getValue('key', {'key': 'value'})).to.be('value');
            });
            it('returns a nested key by a query key', function() {
                expect(clazz.getValue('key', {'rootkey': {'key': 'value'}})).to.be('value');
            });
            it('returns a nested key inside an array by a query key', function() {
                expect(clazz.getValue('key2', {'rootkey': [{'key1': 'value1'}, {'key2': 'value2'}]})).to.be('value2');
            });
            it('returns a key by a concatenated query key', function() {
                expect(clazz.getValue('key1/key2', {'key1': {'key2': 'value2'}})).to.be('value2');
            });
        });
    });
});
