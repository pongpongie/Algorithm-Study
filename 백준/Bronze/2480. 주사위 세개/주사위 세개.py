import sys
input = sys.stdin.readline

n = list(map(int, input().split()))

if n[0] != n[1] and  n[0] != n[2] and n[1] != n[2]:  
  print(sorted(n, reverse=True)[0]*100)

for i in range(2):
  if n[0] == n[1] == n[2]:
    print(10000 + 1000*n[0])
    break
  if (n[i] == n[i-1]) or (n[i] == n[i-2]):
    print(1000 + n[i]*100)
    break