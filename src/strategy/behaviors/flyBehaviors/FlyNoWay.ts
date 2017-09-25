import FlyBehavior from './FlyBehavior';

export default class FlyNoWay implements FlyBehavior {
  public fly(): void {
    console.log('飛べません');
  }
}