function cov_4sj56mdj() {
  const path = '/home/vlad/RSS/REACT/rss-react/react_components/src/mocks/server.ts';
  const hash = '701eb5f146706621ae7eed61bca45f253f451a95';
  const global = new Function('return this')();
  const gcv = '__coverage__';
  const coverageData = {
    path: '/home/vlad/RSS/REACT/rss-react/react_components/src/mocks/server.ts',
    statementMap: {
      '0': {
        start: {
          line: 4,
          column: 22,
        },
        end: {
          line: 4,
          column: 46,
        },
      },
    },
    fnMap: {},
    branchMap: {},
    s: {
      '0': 0,
    },
    f: {},
    b: {},
    _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
    hash: '701eb5f146706621ae7eed61bca45f253f451a95',
  };
  const coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  const actualCoverage = coverage[path];
  {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    cov_4sj56mdj = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_4sj56mdj();
import { setupServer } from 'msw/node';
import { handlers } from './handlers';
export const server = (cov_4sj56mdj().s[0]++, setupServer(...handlers));
