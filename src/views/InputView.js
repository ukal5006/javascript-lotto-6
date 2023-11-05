import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async getPurchaseAmount() {
    const amount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return amount;
  },

  async getWinningNumber() {
    const winningNumber = await Console.readLineAsync(
      '\n당첨 번호를 입력해 주세요.\n'
    );
    return winningNumber;
  },

  async getBonusNumber() {
    const bonusNumber = await Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n'
    );
    return bonusNumber;
  },
};

export default InputView;
