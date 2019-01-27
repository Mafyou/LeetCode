class Solution(object):
    def uniquePathsIII(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        def dfs(step, x, y):         
            nonlocal ways
            if (x, y) == end:
                if step == nempty:
                    ways += 1
                return
            for k in range(4):
                nx, ny = x + dx[k], y + dy[k]
                if 0 <= nx < n and 0 <= ny < m and grid[nx][ny] == 0:
                    grid[nx][ny] = 3
                    dfs(step + 1, nx, ny)                    
                    grid[nx][ny] = 0
            
        dx, dy = [0, 1, 0, -1], [1, 0, -1, 0]
        ways = 0
        n, m = len(grid), len(grid[0])
        nempty = 1
        for i in range(n):
            for j in range(m):
                if grid[i][j] == 1:
                    start = (i, j)
                elif grid[i][j] == 0:
                    nempty +=1 
                elif grid[i][j] == 2:
                    end = (i, j)
                    grid[i][j] = 0
        dfs(0, *start)
        return ways

toto = Solution()
toto.uniquePathsIII([[1,0,0,0],[0,0,0,0],[0,0,2,-1]]) # 2
#toto.uniquePathsIII([[1,0,0,0],[0,0,0,0],[0,0,0,2]]) # 4
#toto .uniquePathsIII( [[0,1],[2,0]]) # 0