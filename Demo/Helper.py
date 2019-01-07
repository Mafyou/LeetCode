class Demo:
    def Main(self, arr):
        for zipped in zip(*arr):
            print(zipped)
    def YieldManip(self):
        def f123():
            yield 1
            yield 2
            yield 3

        for item in f123():
            print(item)


demo = Demo()
demo.Main(["cba","daf","ghi"])

demo.YieldManip()