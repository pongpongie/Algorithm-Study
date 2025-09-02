import sys

input = sys.stdin.readline
ans = list(map(list, input().split()))
tmp = ""

for i in range(0, 2):
    tmp = ans[i][0]
    ans[i][0] = ans[i][2]
    ans[i][2] = tmp
    ans[i] = int("".join(ans[i]))

print(ans[0]) if ans[0] > ans[1] else print(ans[1])