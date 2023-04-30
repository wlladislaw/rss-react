function cov_15qoitznab() {
  const path = '/home/vlad/RSS/REACT/rss-react/react_components/src/mocks/handlers.ts';
  const hash = '139b74dd3ebc632bf1fb806acdd232dfff212690';
  const global = new Function('return this')();
  const gcv = '__coverage__';
  const coverageData = {
    path: '/home/vlad/RSS/REACT/rss-react/react_components/src/mocks/handlers.ts',
    statementMap: {
      '0': {
        start: {
          line: 2,
          column: 14,
        },
        end: {
          line: 2,
          column: 22,
        },
      },
      '1': {
        start: {
          line: 3,
          column: 21,
        },
        end: {
          line: 24,
          column: 1,
        },
      },
      '2': {
        start: {
          line: 25,
          column: 12,
        },
        end: {
          line: 25,
          column: 51,
        },
      },
      '3': {
        start: {
          line: 26,
          column: 21,
        },
        end: {
          line: 28,
          column: 1,
        },
      },
      '4': {
        start: {
          line: 29,
          column: 15,
        },
        end: {
          line: 29,
          column: 41,
        },
      },
      '5': {
        start: {
          line: 30,
          column: 13,
        },
        end: {
          line: 30,
          column: 37,
        },
      },
      '6': {
        start: {
          line: 32,
          column: 24,
        },
        end: {
          line: 38,
          column: 1,
        },
      },
      '7': {
        start: {
          line: 34,
          column: 4,
        },
        end: {
          line: 36,
          column: 5,
        },
      },
      '8': {
        start: {
          line: 35,
          column: 6,
        },
        end: {
          line: 35,
          column: 58,
        },
      },
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 33,
            column: 16,
          },
          end: {
            line: 33,
            column: 17,
          },
        },
        loc: {
          start: {
            line: 33,
            column: 35,
          },
          end: {
            line: 37,
            column: 3,
          },
        },
        line: 33,
      },
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 34,
            column: 4,
          },
          end: {
            line: 36,
            column: 5,
          },
        },
        type: 'if',
        locations: [
          {
            start: {
              line: 34,
              column: 4,
            },
            end: {
              line: 36,
              column: 5,
            },
          },
          {
            start: {
              line: 34,
              column: 4,
            },
            end: {
              line: 36,
              column: 5,
            },
          },
        ],
        line: 34,
      },
      '1': {
        loc: {
          start: {
            line: 34,
            column: 8,
          },
          end: {
            line: 34,
            column: 62,
          },
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 34,
              column: 8,
            },
            end: {
              line: 34,
              column: 41,
            },
          },
          {
            start: {
              line: 34,
              column: 45,
            },
            end: {
              line: 34,
              column: 62,
            },
          },
        ],
        line: 34,
      },
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
    },
    f: {
      '0': 0,
    },
    b: {
      '0': [0, 0],
      '1': [0, 0],
    },
    _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
    hash: '139b74dd3ebc632bf1fb806acdd232dfff212690',
  };
  const coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  const actualCoverage = coverage[path];
  {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    cov_15qoitznab = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_15qoitznab();
import { rest } from 'msw';
const input = (cov_15qoitznab().s[0]++, 'people');
const mockResponse =
  (cov_15qoitznab().s[1]++,
  {
    photos: {
      photo: [
        {
          id: '1',
          title: 'test title 1',
          owner: 'test owner 1',
          server: 'test server 1',
          secret: 'test secret 1',
          farm: 1,
        },
        {
          id: '2',
          title: 'test title 2',
          owner: 'test owner 2',
          server: 'test server 2',
          secret: 'test secret 2',
          farm: 2,
        },
      ],
    },
  });
const url = (cov_15qoitznab().s[2]++, `https://api.flickr.com/services/rest/`);
const searchParams =
  (cov_15qoitznab().s[3]++,
  new URLSearchParams(
    `?method=flickr.photos.search&api_key=f8e8c8e39de193f01618299b61e622ea&text=${input}&format=json&nojsoncallback=1`
  ));
const method = (cov_15qoitznab().s[4]++, searchParams.get('method'));
const text = (cov_15qoitznab().s[5]++, searchParams.get('text'));
export const handlers =
  (cov_15qoitznab().s[6]++,
  [
    rest.get(url, (req, res, ctx) => {
      cov_15qoitznab().f[0]++;
      cov_15qoitznab().s[7]++;
      if (
        (cov_15qoitznab().b[1][0]++, method === 'flickr.photos.search') &&
        (cov_15qoitznab().b[1][1]++, text === 'people')
      ) {
        cov_15qoitznab().b[0][0]++;
        cov_15qoitznab().s[8]++;
        return res(ctx.status(200), ctx.json(mockResponse));
      } else {
        cov_15qoitznab().b[0][1]++;
      }
    }),
  ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMTVxb2l0em5hYiIsImFjdHVhbENvdmVyYWdlIiwicmVzdCIsImlucHV0IiwicyIsIm1vY2tSZXNwb25zZSIsInBob3RvcyIsInBob3RvIiwiaWQiLCJ0aXRsZSIsIm93bmVyIiwic2VydmVyIiwic2VjcmV0IiwiZmFybSIsInVybCIsInNlYXJjaFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsIm1ldGhvZCIsImdldCIsInRleHQiLCJoYW5kbGVycyIsInJlcSIsInJlcyIsImN0eCIsImYiLCJiIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VzIjpbImhhbmRsZXJzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlc3QgfSBmcm9tICdtc3cnO1xuY29uc3QgaW5wdXQgPSAncGVvcGxlJztcbmNvbnN0IG1vY2tSZXNwb25zZSA9IHtcbiAgcGhvdG9zOiB7XG4gICAgcGhvdG86IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgdGl0bGU6ICd0ZXN0IHRpdGxlIDEnLFxuICAgICAgICBvd25lcjogJ3Rlc3Qgb3duZXIgMScsXG4gICAgICAgIHNlcnZlcjogJ3Rlc3Qgc2VydmVyIDEnLFxuICAgICAgICBzZWNyZXQ6ICd0ZXN0IHNlY3JldCAxJyxcbiAgICAgICAgZmFybTogMSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnMicsXG4gICAgICAgIHRpdGxlOiAndGVzdCB0aXRsZSAyJyxcbiAgICAgICAgb3duZXI6ICd0ZXN0IG93bmVyIDInLFxuICAgICAgICBzZXJ2ZXI6ICd0ZXN0IHNlcnZlciAyJyxcbiAgICAgICAgc2VjcmV0OiAndGVzdCBzZWNyZXQgMicsXG4gICAgICAgIGZhcm06IDIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG59O1xuY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLmZsaWNrci5jb20vc2VydmljZXMvcmVzdC9gO1xuY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhcbiAgYD9tZXRob2Q9ZmxpY2tyLnBob3Rvcy5zZWFyY2gmYXBpX2tleT1mOGU4YzhlMzlkZTE5M2YwMTYxODI5OWI2MWU2MjJlYSZ0ZXh0PSR7aW5wdXR9JmZvcm1hdD1qc29uJm5vanNvbmNhbGxiYWNrPTFgXG4pO1xuY29uc3QgbWV0aG9kID0gc2VhcmNoUGFyYW1zLmdldCgnbWV0aG9kJyk7XG5jb25zdCB0ZXh0ID0gc2VhcmNoUGFyYW1zLmdldCgndGV4dCcpO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlcnMgPSBbXG4gIHJlc3QuZ2V0KHVybCwgKHJlcSwgcmVzLCBjdHgpID0+IHtcbiAgICBpZiAobWV0aG9kID09PSAnZmxpY2tyLnBob3Rvcy5zZWFyY2gnICYmIHRleHQgPT09ICdwZW9wbGUnKSB7XG4gICAgICByZXR1cm4gcmVzKGN0eC5zdGF0dXMoMjAwKSwgY3R4Lmpzb24obW9ja1Jlc3BvbnNlKSk7XG4gICAgfVxuICB9KSxcbl07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxjQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxjQUFBO0FBZlosU0FBU0UsSUFBSSxRQUFRLEtBQUs7QUFDMUIsTUFBTUMsS0FBSyxJQUFBSCxjQUFBLEdBQUFJLENBQUEsT0FBRyxRQUFRO0FBQ3RCLE1BQU1DLFlBQVksSUFBQUwsY0FBQSxHQUFBSSxDQUFBLE9BQUc7RUFDbkJFLE1BQU0sRUFBRTtJQUNOQyxLQUFLLEVBQUUsQ0FDTDtNQUNFQyxFQUFFLEVBQUUsR0FBRztNQUNQQyxLQUFLLEVBQUUsY0FBYztNQUNyQkMsS0FBSyxFQUFFLGNBQWM7TUFDckJDLE1BQU0sRUFBRSxlQUFlO01BQ3ZCQyxNQUFNLEVBQUUsZUFBZTtNQUN2QkMsSUFBSSxFQUFFO0lBQ1IsQ0FBQyxFQUNEO01BQ0VMLEVBQUUsRUFBRSxHQUFHO01BQ1BDLEtBQUssRUFBRSxjQUFjO01BQ3JCQyxLQUFLLEVBQUUsY0FBYztNQUNyQkMsTUFBTSxFQUFFLGVBQWU7TUFDdkJDLE1BQU0sRUFBRSxlQUFlO01BQ3ZCQyxJQUFJLEVBQUU7SUFDUixDQUFDO0VBRUw7QUFDRixDQUFDO0FBQ0QsTUFBTUMsR0FBRyxJQUFBZCxjQUFBLEdBQUFJLENBQUEsT0FBSSx1Q0FBc0M7QUFDbkQsTUFBTVcsWUFBWSxJQUFBZixjQUFBLEdBQUFJLENBQUEsT0FBRyxJQUFJWSxlQUFlLENBQ3JDLDhFQUE2RWIsS0FBTSwrQkFDdEYsQ0FBQztBQUNELE1BQU1jLE1BQU0sSUFBQWpCLGNBQUEsR0FBQUksQ0FBQSxPQUFHVyxZQUFZLENBQUNHLEdBQUcsQ0FBQyxRQUFRLENBQUM7QUFDekMsTUFBTUMsSUFBSSxJQUFBbkIsY0FBQSxHQUFBSSxDQUFBLE9BQUdXLFlBQVksQ0FBQ0csR0FBRyxDQUFDLE1BQU0sQ0FBQztBQUVyQyxPQUFPLE1BQU1FLFFBQVEsSUFBQXBCLGNBQUEsR0FBQUksQ0FBQSxPQUFHLENBQ3RCRixJQUFJLENBQUNnQixHQUFHLENBQUNKLEdBQUcsRUFBRSxDQUFDTyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxLQUFLO0VBQUF2QixjQUFBLEdBQUF3QixDQUFBO0VBQUF4QixjQUFBLEdBQUFJLENBQUE7RUFDL0IsSUFBSSxDQUFBSixjQUFBLEdBQUF5QixDQUFBLFVBQUFSLE1BQU0sS0FBSyxzQkFBc0IsTUFBQWpCLGNBQUEsR0FBQXlCLENBQUEsVUFBSU4sSUFBSSxLQUFLLFFBQVEsR0FBRTtJQUFBbkIsY0FBQSxHQUFBeUIsQ0FBQTtJQUFBekIsY0FBQSxHQUFBSSxDQUFBO0lBQzFELE9BQU9rQixHQUFHLENBQUNDLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFSCxHQUFHLENBQUNJLElBQUksQ0FBQ3RCLFlBQVksQ0FBQyxDQUFDO0VBQ3JELENBQUM7SUFBQUwsY0FBQSxHQUFBeUIsQ0FBQTtFQUFBO0FBQ0gsQ0FBQyxDQUFDLENBQ0gifQ==
