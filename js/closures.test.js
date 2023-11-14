import { makeCounter } from './closures';
test('increment counter by 1', () => {
    const counter = makeCounter();
    expect(counter.getCounter()).toBe(0);
})