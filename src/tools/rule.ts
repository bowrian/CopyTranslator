var _ = require("lodash");
enum RuleName {
  autoCopy,
  listenClipboard,
  detectLanguage,
  incrementalCopy,
  stayTop,
  smartDict,
  autoHide,
  autoPaste,
  autoPurify,
  autoShow,
  frameMode,
  translatorType,
  // mode config
  focus,
  contrast,
  //
  source,
  target,
  locale
}

let ruleKeys: Array<string> = Object.values(RuleName).filter(
  k => (typeof k as any) !== "number"
);

let reverseRuleName: any = {};
Object.values(RuleName)
  .filter(k => (typeof k as any) == "number")
  .forEach(e => {
    reverseRuleName[ruleKeys[e]] = e;
  });

interface ModeConfig {
  x: number;
  y: number;
  height: number;
  width: number;
  fontSize: number;
}
type CheckFuction = (value: any) => boolean;

interface Rule {
  predefined: any;
  msg: string;
  check?: CheckFuction; // 检查是否有效的函数
}

class BoolRule implements Rule {
  predefined: boolean;
  msg: string;
  constructor(predefined: boolean, msg: string) {
    this.predefined = predefined;
    this.msg = msg;
  }
}

class NumberRule implements Rule {
  predefined: number;
  msg: string;
  check?: CheckFuction;
  constructor(predefined: number, msg: string, check?: CheckFuction) {
    this.predefined = predefined;
    this.msg = msg;
    if (check) {
      this.check = check;
    }
  }
}

class ModeRule implements Rule {
  predefined: ModeConfig;
  msg: string;
  check?: CheckFuction;
  constructor(predefined: ModeConfig, msg: string, check?: CheckFuction) {
    this.predefined = predefined;
    this.msg = msg;
    if (check) {
      this.check = check;
    }
  }
}

export {
  Rule,
  NumberRule,
  ModeRule,
  BoolRule,
  CheckFuction,
  RuleName,
  reverseRuleName,
  ruleKeys,
  ModeConfig
};
