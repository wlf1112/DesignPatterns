abstract class Factory {
  abstract createButton(): Button;
  abstract createIcon(): Icon;
}
abstract class Icon {
  abstract render(): void;
}
class AppleIcon extends Icon{
  render(): void {
    console.log("绘制苹果图标");
  }
}
class WindowsIcon extends Icon{
  render(): void {
    console.log("绘制Windows图标");
  }
}

abstract class Button {
  abstract render(): void;
}
class AppleButton extends Button {
  render(): void {
    console.log("绘制Apple按钮");
  }
}
class WindowsButton extends Button{
  render(): void {
    console.log("绘制Windows按钮");
  }
}

class AppleFactory extends Factory {
  createButton(): AppleButton {
    return new AppleButton();
  }
  createIcon(): AppleIcon {
    return new AppleIcon();
  }
}
class WindowsFactory extends Factory {
  createButton(): WindowsButton {
    return new WindowsButton();
  }
  createIcon(): WindowsIcon {
    return new WindowsIcon();
  }
}

let windowsFactory = new WindowsFactory();
windowsFactory.createIcon().render();
windowsFactory.createButton().render();

let appleFactory = new AppleFactory();
appleFactory.createIcon().render();
appleFactory.createButton().render();
