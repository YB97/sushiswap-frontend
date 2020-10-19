export type MessageSctructureType = {
  navbar: {
    home: string
    stake: string
    about: string
    exchange: string
    profile: string
  }
  chknHome: {
    subtitle: string
    stakeButton: string
    inviteButton: string
  }
  stake: {
    title: string
    subtitle: string
    deposit: string
    earned: string
    tokens: {
      CHKN: string
      'CHKN-USDT': string
      'CHKN-UNI': string
      'CHKN-SUSHI': string
      USDT: string
      USDC: string
      DAI: string
      LINK: string
      UNI: string
      'DAI-USDT': string
      YFII: string
      LEND: string
      SNX: string
      YFI: string
      AMPL: string
    }
    next_egg_card: {
      title: string
      subtitle: string
      text: string
    }
    next_egg_modal: {
      title: string
      text: string
      button: string
    }
    banner: {
      title: string
      subtitle: string
      button: string
      stacked: string
    }
    buttons: {
      select: string
      collect: string
      unstake: string
    }
    approve: string
    eggs: string
  }
  account_modal: {
    my_account: string
    view: string
    sign_out: string
  }
  unlock_modal: {
    select_provider: string
    cancel: string
    connect: string
  }
  system_update_modal: {
    soon_text: string
    week_text: string
  }
  text: {
    trx_duration: string
  }
  card: {
    info: {
      yourBalance: string
      balance: string
      totalBalance: string
      pendingHarvest: string
      rewards: string
    }
  }
  banner: {
    plane: string
  }
  modal: {
    referral: {
      title: string
      subtitle: string
      refTitle: string
      generatePlaceholder: string
      rules: string
      paragraph1: string
      paragraph2: string
      paragraph3: string
      paragraph4: string
      paragraph5: string
      poolSize: string
    }
    disclaimer: {
      title: string
      p1: string
      p2: string
      p3: string
      p4: string
      p5: string
      p6: string
      helperText: string
    }
    gasDisc: string
  }
  button: {
    confirm: string
    stake: string
    invite: string
    unlock: string
    referModal: string
    myWallet: string
  }
  profile: {
    title: string
    referral: {
      title: string
      points: string
      invited: string
      rewardPool: string
      own: string
      estimatedReward: string
      inviteMore: string
      unlocked: string
    }
    stake: {
      title: string
      currentPool: string
      rewardPool: string
      own: string
      estimatedReward: string
      staked: string
      unlocked: string
    }
    buttons: {
      generate: string
      collect: string
      stake: string
      unstake: string
    }
  }
}

export const CN: MessageSctructureType = {
  navbar: {
    home: '首页',
    stake: '持有',
    about: '关于',
    exchange: '交易所',
    profile: '我的个人资料',
  },
  chknHome: {
    subtitle: '持有鸡蛋（收获 LP代币）孵化自己的CHKN',
    stakeButton: '持有',
    inviteButton: '邀请并赚取',
  },
  stake: {
    title: '选择如何孵化',
    subtitle: '通过持有鸡蛋来赚取CHKN代币（收获 LP代币）',
    deposit: '存款',
    earned: '赚钱鸡蛋',
    tokens: {
      CHKN: '蛋王',
      'CHKN-USDT': '超级壳',
      'CHKN-UNI': '茶叶蛋',
      'CHKN-SUSHI': '煎蛋男孩',
      USDT: '人气先生',
      USDC: '元气少女',
      DAI: '老蛋',
      LINK: '剑客',
      UNI: '天才艺人',
      'DAI-USDT': '友好战斗机',
      YFII: '仁慈的银行家',
      LEND: '慷慨的蛋黄',
      SNX: '变形者',
      YFI: '禅宗农夫',
      AMPL: '圆圆',
    },
    next_egg_card: {
      title: '为下一个鸡蛋投票',
      subtitle: 'CHKN是您的官方币种',
      text:
        '作为CHKN持有者，您可以在平台的下一阶段中农场新推出的蛋类进行投票。',
    },
    next_egg_modal: {
      title: '为下一个鸡蛋投票',
      text: 'CHKN治理和新的蛋类投票即将推出！',
      button: '确认',
    },
    banner: {
      title: '持有您的CHKN以获得10％推荐奖金池奖励！',
      subtitle:
        '所有推荐奖金池奖励中的10％会提供给CHKN的持有者。 您持有的CHKN越多，解锁时从池中赚取的收益就越多',
      button: '股份CHKN',
      stacked: '目前您已投下',
    },
    buttons: {
      select: '选择',
      collect: '收集',
      unstake: '放心', // FROM GOOGLE
    },
    approve: '批准',
    eggs: '鸡蛋',
  },
  account_modal: {
    my_account: '我的帐户',
    view: '在“以太扫描”上查看',
    sign_out: '登出',
  },
  unlock_modal: {
    select_provider: '选择一个钱包提供商。',
    cancel: '取消',
    connect: '连接',
  },
  system_update_modal: {
    soon_text:
      '多谢您的耐心配合，我们正在进行系统升级。 该站点即将重新上线。 敬请关注。',
    week_text: '请密切注意这些规则，这些规则将在本周发布到这里。',
  },
  text: {
    trx_duration: '这可能需要几秒钟到几分钟的时间，具体取决于您支付的GAS费用',
  },
  card: {
    info: {
      yourBalance: '您的CHKN余额',
      balance: '锁定',
      totalBalance: '待孵化的CHKN总供',
      pendingHarvest: '待收获',
      rewards: '每块新奖励',
    },
  },
  banner: {
    plane: '推荐奖金池',
  },
  modal: {
    referral: {
      title: '推荐您的朋友，持币都可获得奖励！',
      subtitle: '通过短信/电子邮件向他们分享推荐链接',
      refTitle: '推荐码',
      generatePlaceholder: '点击生成',
      rules: '规则',
      paragraph1:
        '当朋友点击您的推荐链接，然后关联他们的钱包和持有chkn.farm时，您的以太坊地址会获得一定数量的积分。',
      paragraph2:
        '您所赚取的积分数取决于您朋友的持有量。要获得积分，您和您邀请的每个朋友必须在chkn.farm上至少注值200美元的流动资金，并维持该最低余额。',
      paragraph3:
        '如果您邀请推荐了2个朋友，那么您还可以从他邀请的朋友所持有的流动资金中获得积分（就好像您直接推荐他们一样，积分占75％）。 而且，如果您邀请3个或更多的朋友，那么当他所邀请推荐的朋友也邀请朋友持有的话您亦可从他们持有的流动性资金上赚取积分（就好像您直接推荐他们一样，积分占50％）。',
      paragraph4:
        '当农场达到以下任何一个流动性市值里程碑时，就会释放75％的推荐奖金池，您将根据累积的点数除以农场中每个人的总点数来获得一部分奖励。 最终里程碑将解锁100％。',
      paragraph5:
        '里程碑：50万美元，125万美元，250万美元，500万美元，1250万美元，2500万美元，5000万美元，1亿美元，2.5亿美元，5亿美元',
      poolSize: '当前总奖励池大小：',
    },
    disclaimer: {
      title: '审核：无',
      p1:
        '虽然CHKN协议的最初创建者已经做出了合理的努力来尝试确保合同的安全性，但是此时已经进行了很多工作，包括从现有的方法中分出很多代码库来进行严格的审核。',
      p2: '我们强烈敦促所有人谨慎选择参与这些合同。',
      p3: '注意CHKN Uniswap LPs',
      p4: '唯一与CHKN兼容的Uniswap池是CHKN / yCRV（曲线yPool令牌）',
      p5: '为其他Uniswap池提供流动性很危险',
      p6: '您将失去您的基准份额',
      helperText:
        '**请注意：CHKN.farm已将其中4个Egg FLP代币更新为新的FLP版本。 您用于CHKN-ETH，CHKN-USDT，CHKN-SUSHI和CHKN-UNI的旧鸡蛋都需要迁移。 如果您尚未迁移这4对配对的Egg FLP代币，它们将不会显示在此处，您将无法持有。 请通过以下方法迁移它们：CHKN.farm Exchange，单击“池”，单击列表中这4对中的一个，然后点击“迁移”。 迁移后，您的这4对配对的Egg FLP代币将像往常一样显示在此处，您将可以将持有以赚取CHKN。',
    },
    gasDisc: '这可能需要几秒钟到几分钟的时间，具体取决于您支付的GAS费用',
  },
  button: {
    confirm: '确认',
    stake: '持有',
    invite: '邀请并赚取',
    unlock: '关联钱包',
    referModal: '立即邀请',
    myWallet: '我的钱包',
  },
  profile: {
    title: '我的个人资料',
    referral: {
      points: '积分',
      title: '我的推荐奖励',
      invited: '您邀请的人数 #',
      rewardPool: '当前奖励池',
      own: '您拥有奖金池的百分之*',
      estimatedReward: '当前奖金（USDT）',
      inviteMore: '邀请更多人',
      unlocked: '已解锁',
    },
    stake: {
      title: '我的持有奖励',
      currentPool: '当前已持有的CHKN池',
      rewardPool: '当前奖励池',
      own: '您拥有奖金池的百分之*',
      estimatedReward: '当前奖金（USDT）',
      staked: '已持有',
      unlocked: '已解锁',
    },
    buttons: {
      collect: '收集我的奖励',
      stake: '抵押我的CHKN',
      unstake: '取出',
      generate: '点击生成',
    },
  },
}

export const EN: MessageSctructureType = {
  navbar: {
    home: 'Home',
    stake: 'Stake',
    about: 'About',
    exchange: 'Exchange',
    profile: 'My Profile',
  },
  chknHome: {
    subtitle: 'Stake Eggs (farm LP tokens) to hatch your very own CHKN',
    stakeButton: 'Stake',
    inviteButton: 'Invite & Earn',
  },
  stake: {
    title: 'Select how to hatch your Chicken',
    subtitle: 'Earn CHKN token by staking Eggs (Farm LP Tokens)',
    deposit: 'Deposit',
    earned: 'Eggs Earn',
    tokens: {
      CHKN: 'Egg King',
      'CHKN-USDT': 'Super Shell',
      'CHKN-UNI': '茶叶蛋',
      'CHKN-SUSHI': 'Tamago Boy',
      USDT: 'Mr. Popular',
      USDC: 'Chill Gal',
      DAI: 'Old Eggy',
      LINK: 'Swordsman',
      UNI: 'Gifted Artiste',
      'DAI-USDT': 'Friendly Fighter',
      YFII: 'Benevolent Banker',
      LEND: 'Generous Yolk',
      SNX: 'Shapeshifter',
      YFI: 'Zen Farmer',
      AMPL: 'Amply Plump',
    },
    next_egg_card: {
      title: 'Vote for the Next Egg',
      subtitle: 'CHKN is your governance token',
      text:
        'As a CHKN holder, you will get to vote on which Eggs the farm launches in the next phase of the platform.',
    },
    next_egg_modal: {
      title: 'Vote for the Next Egg',
      text: 'CHKN governance and new Egg voting coming soon!',
      button: 'Okay',
    },
    banner: {
      title:
        'Stake your CHKN for a piece of the 10% Referral Bonus Pool rewards!',
      subtitle:
        "10% of all Referral Bonus Pool rewards go to stakers of CHKN. The more CHKN you have staked continuously, the more you earn from the pool when it's unlocked",
      button: 'Stake CHKN',
      stacked: 'you staked so far',
    },
    buttons: {
      select: 'Select',
      collect: 'Collect',
      unstake: 'Unstake',
    },
    approve: 'Approve',
    eggs: 'Eggs',
  },
  account_modal: {
    my_account: 'My account',
    view: 'View on Etherscan',
    sign_out: 'Sign out',
  },
  unlock_modal: {
    select_provider: 'Select a wallet provider.',
    cancel: 'Cancel',
    connect: 'Connect',
  },
  system_update_modal: {
    soon_text:
      "Thanks for your patience, we're doing a system upgrade. Site will be live again soon. Stay tuned.",
    week_text: 'Stay tuned fot the rules, they will be posted here this week.',
  },
  text: {
    trx_duration:
      'This can take a few seconds to a few minutes depending on how much gas you used',
  },
  card: {
    info: {
      yourBalance: 'Your CHKN Balance',
      balance: 'Locked',
      totalBalance: 'Total CHKN Supply Left to Farm',
      pendingHarvest: 'Pending Harvest',
      rewards: 'New rewards per block',
    },
  },
  banner: {
    plane: 'Referral bonus pool',
  },
  modal: {
    referral: {
      title: 'Refer your friends and earn on everything they stake!',
      subtitle: 'Share a referral link to them via SMS / Email',
      refTitle: 'REFERRAL CODE',
      generatePlaceholder: 'Click to generate',
      rules: 'Rules',
      paragraph1:
        'When a friend clicks your referral link, and then connects their wallet and stakes on chkn.farm, your ethereum address is credited with a certain number of points.',
      paragraph2:
        'The amount of points you earn is based on how much your friend stakes. To be eligible for points, you and each of the friends you invite personally must stake at least $200 worth of liquidity on chkn.farm and maintain that minimum balance.',
      paragraph3:
        'If you invite 2 friends, then you also earn points on all of the liquidity staked by the people who they invite (75% as many points as if you referred their invites directly). And if you invite 3 or more friends, then you earn points on all of the liquidity staked by who your friends’ invites invite as well (50% as many points as if you referred their invites directly).',
      paragraph4:
        'When the farm hits any of the liquidity market cap milestones below, 75% of the Referral Bonus Pool unlocks and you earn a share of the rewards based on the number of points you’ve accumulated divided by the total points of everyone on the farm. Final milestone unlocks 100%.',
      paragraph5:
        'Milestones: $500k, $1.25m, $2.5m, $5m, $12.5m, $25m, $50m, $100m, $250m, $500m',
      poolSize: 'Current total reward pool size:',
    },
    disclaimer: {
      title: 'Audits: None.',
      p1:
        'While the initial creators of the CHKN protocol have made reasonable efforts to attempt to ensure the security of the contracts, including forking much of the codebase from existing approaching the rigor of a formal audit has been conducted at this time.',
      p2:
        'We STRONGLY urge caution to anyone who chooses to engage with these contracts.',
      p3: 'Attention CHKN Uniswap LPs',
      p4:
        'The only Uniswap pool that is compatible with CHKN is CHKN/yCRV (Curve yPool tokens)',
      p5: 'Providing liquidity for other Uniswap pools is dangerous',
      p6: 'You will LOSE your share of rebases',
      helperText:
        "**PLEASE NOTE: CHKN.farm has updated 4 of its Egg FLP tokens into a new FLP version. Your old Eggs for CHKN-ETH, CHKN-USDT, CHKN-SUSHI, and CHKN-UNI all need to be migrated. If you have not migrated your Egg FLP Tokens for these 4 pairs yet, they will not show up here and you will not be able to stake. Please migrate them by going to the CHKN.farm Exchange, clicking on Pool, clicking on one of these 4 pairs in the list, and then clicking 'Migrate'. Upon migrating, your Egg FLP tokens for these 4 pairs will appear here like normal and you will be able to stake them to earn CHKN.",
    },
    gasDisc:
      'This can take a few seconds to a few minutes depending on how much gas you used',
  },
  button: {
    confirm: 'confirm',
    stake: 'Stake',
    invite: 'Invite & Earn',
    unlock: 'Unlock Wallet',
    referModal: 'Refer now',
    myWallet: 'My Wallet',
  },
  profile: {
    title: 'My Profile',
    referral: {
      points: 'points',
      title: 'My Referral Rewards ',
      invited: '# of people you invited',
      rewardPool: 'current reward pool',
      own: '% of the pool you own',
      estimatedReward: 'my current estimated USDT reward',
      inviteMore: 'invite more people',
      unlocked: 'unlocked',
    },
    stake: {
      title: 'My Staking Rewards',
      currentPool: 'current staked CHKN pool',
      rewardPool: 'current reward pool',
      own: '% of the pool you own',
      estimatedReward: 'my current estimated USDT reward',
      staked: 'staked',
      unlocked: 'unlocked',
    },
    buttons: {
      collect: 'Collect My Rewards',
      stake: 'Stake My CHKN',
      unstake: 'Unstake',
      generate: 'Click to generate',
    },
  },
}
