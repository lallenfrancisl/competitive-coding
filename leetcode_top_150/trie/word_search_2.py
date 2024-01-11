# python3


class TrieNode:
    def __init__(self):
        self.is_word = False
        self.children = {}

    def add_word(self, word):
        curr = self

        for c in word:
            if c not in curr.children:
                curr.children[c] = TrieNode()

            curr = curr.children[c]

        curr.is_word = True


class Solution:
    def __init__(self):
        self.res = set()
        self.root = TrieNode()
        self.rows = 0
        self.cols = 0
        self.board = None
        self.visit = set()

    def findWords(self, board, words):
        self.board = board
        self.rows = len(self.board)
        self.cols = len(self.board[0])
        self.root = TrieNode()

        for word in words:
            self.root.add_word(word)

        for r in range(self.rows):
            for c in range(self.cols):
                self.dfs(r, c, self.root, "")

        return list(self.res)

    def dfs(self, r: int, c: int, node: TrieNode, word: str):
        if (
            r < 0
            or c < 0
            or r == self.rows
            or c == self.cols
            or self.board[r][c] not in node.children
            or (r, c) in self.visit
        ):
            return

        # pre
        self.visit.add((r, c))
        word += self.board[r][c]
        node = node.children[self.board[r][c]]

        if node.is_word:
            self.res.add(word)

        # recurse
        self.dfs(r + 1, c, node, word)
        self.dfs(r, c + 1, node, word)
        self.dfs(r - 1, c, node, word)
        self.dfs(r, c - 1, node, word)

        # post
        self.visit.remove((r, c))
