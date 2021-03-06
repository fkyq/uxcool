import { waitTime, $ } from '@cloud-sn/v-test-utils';
import UxMessage from '..';

describe.each(['info', 'success', 'error', 'warning'])('render correctly', (notice) => {
  it(`render ${notice} message correctly`, async () => {
    UxMessage[notice]({ duration: 0 });
    await waitTime(50);
    expect($(`.ux-message-${notice}`).length).toBe(1);
    $('.ux-message-notice').remove();
  });
});

it('render dangerouslyHTML correctly', async () => {
  UxMessage.warn({ duration: 0, content: '<span>this is HTML</span>' });
  await waitTime(50);
  expect($('.ux-message-warning').find('span')[0].innerHTML).toBe('&lt;span&gt;this is HTML&lt;/span&gt;');
  $('.ux-message-notice').remove();
  UxMessage.warn({
    duration: 0,
    content: '<span>this is HTML</span>',
    dangerouslySetInnerHTML: true,
  });
  await waitTime(50);
  expect($('.ux-message-warning').find('span')[0].children[0].outerHTML).toBe('<span>this is HTML</span>');
  $('.ux-message-notice').remove();
});

it('render duration correctly', async () => {
  const onCloseCb = jest.fn();
  UxMessage.info({ duration: 100, onClose: onCloseCb });
  await waitTime(50);
  expect($('.ux-message-info').length).toBe(1);
  await waitTime(150);
  expect($('.ux-message-info').length).toBe(0);
  expect(onCloseCb).toHaveBeenCalledTimes(1);
});

it('global config works correctly', async () => {
  document.body.appendChild(document.createElement('section'));
  UxMessage.config({ top: '200px', getContainer: () => $('section')[0] });
  UxMessage.info({ duration: 0 });
  await waitTime(50);
  expect($('.ux-message').parent()[0].tagName).toBe('SECTION');
  expect($('.ux-message').css('top')).toBe('200px');
});

it('global config top to null correctly', async () => {
  UxMessage.config({ top: null, duration: 0 });
  UxMessage.info('hello world');
  await waitTime(50);
  expect($('.ux-message').css('top')).toBe('');
});

it('global config top to empty correctly', async () => {
  UxMessage.config({ top: '' });
  UxMessage.info('hello world');
  await waitTime(50);
  expect($('.ux-message').css('top')).toBe('');
});

it('global config top to number correctly', async () => {
  UxMessage.config({ top: 10, duration: 0 });
  UxMessage.info('hello world');
  await waitTime(50);
  expect($('.ux-message').css('top')).toBe('10px');
});

it('notice callback to destroy correctly', async () => {
  UxMessage.config({ top: 10, duration: 0 });
  const hanlde = UxMessage.info('hello world');
  hanlde();
  await waitTime(20);
  expect($('.ux-message').html().indexOf('hello world')).toBe(-1);
});

it('config theme correctly', async () => {
  UxMessage.config({ theme: 'dark', duration: 0 });
  UxMessage.info('hello world');
  await waitTime(20);
  expect($('.ux-message').attr('class')).toEqual(expect.stringContaining('ux-message-dark'));
});

it('config prefixCls correctly', async () => {
  UxMessage.config({ prefixCls: 'custom', duration: 0 });
  UxMessage.info('hello world');
  await waitTime(20);
  expect($('.custom-message')).toBeDefined();
});
