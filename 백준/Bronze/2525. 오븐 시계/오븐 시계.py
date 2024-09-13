import sys
input = sys.stdin.readline

n = list(map(int, input().split()))
t = int(input())

print((n[0] + ((n[1] + t) // 60)) % 24, (n[1] + t) % 60)