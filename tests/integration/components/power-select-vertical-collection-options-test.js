import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('power-select-vertical-collection-options', 'Integration | Component | power select vertical collection options', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{power-select-vertical-collection-options}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#power-select-vertical-collection-options}}
      template block text
    {{/power-select-vertical-collection-options}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
