(function () {
  const $ipsp = window.$ipsp;
  if (!$ipsp) return;
  console.log($ipsp)

  var button = $ipsp.get('button');
  button.setMerchantId(1396424);
  button.setHost('api.fondy.eu');
  button.setAmount(1, 'UAH');
  // button.setResponseUrl('http://site.com/result/');
  // button.setResponseUrl('http://127.0.0.1:5500/index.html');

  // custom fields
  // button.addField({
  //   label: 'ФИО',
  //   name: 'fio',
  //   value: 'Желе',
  //   required: true,
  //   valid: {}
  // });

  var url = button.getUrl();
  console.log('url: ', url);

  $ipsp.get('checkout').config({
    'wrapper': 'body',
    'styles': {
      'body': { 'overflow': 'hidden' },
      '.page-section-shopinfo': { display: 'none' },
      '.page-section-footer': { display: 'none' }
    }
  }).scope(function () {
    this.width(280);
    this.height(480);
    this.addCallback(defaultCallback)
    this.loadUrl(url);
    // this.
  });

})();

function defaultCallback(data,type) {
  console.log('action',data.action);
  console.log('url',data.url)
  console.log('data: ', data);
  console.log('type: ', type);
  if (data.action === 'redirect') {
    this.loadUrl(data.url);
    return;
  }
}