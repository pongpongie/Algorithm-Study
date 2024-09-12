import sys
input = sys.stdin.readline

n = list(map(int, input().split()))

if n[1] >= 45:
  print(n[0], n[1]-45)
elif n[0]==0:
  print(23, 60+n[1]-45)
else: print(n[0]-1, 60+n[1]-45)