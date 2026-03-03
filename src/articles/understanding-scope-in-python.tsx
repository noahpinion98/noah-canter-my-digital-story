const UnderstandingScopeInPython = () => (
  <div className="space-y-6 text-foreground">
    <p>
      When you're starting out with Python, one of the first tricky concepts you'll run into is{" "}
      <strong className="text-primary">scope</strong> — the idea that a variable isn't always accessible from
      everywhere in your code.
    </p>

    <h2 className="text-2xl font-semibold text-primary mt-8">The LEGB Rule</h2>
    <p>
      Python resolves variable names using the <strong>LEGB</strong> rule, checking these scopes in order:
    </p>
    <ol className="list-decimal list-inside space-y-2 pl-4">
      <li><strong className="text-primary">Local</strong> — inside the current function.</li>
      <li><strong className="text-primary">Enclosing</strong> — in any enclosing (outer) function.</li>
      <li><strong className="text-primary">Global</strong> — at the top level of the module.</li>
      <li><strong className="text-primary">Built-in</strong> — Python's built-in names like <code className="bg-muted px-1.5 py-0.5 rounded text-sm">len</code> and <code className="bg-muted px-1.5 py-0.5 rounded text-sm">print</code>.</li>
    </ol>

    <h2 className="text-2xl font-semibold text-primary mt-8">Local Scope</h2>
    <p>Variables created inside a function only exist inside that function:</p>
    <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-sm">
{`def greet():
    message = "Hello!"
    print(message)

greet()       # prints "Hello!"
print(message)  # NameError: name 'message' is not defined`}
    </pre>

    <h2 className="text-2xl font-semibold text-primary mt-8">Global Scope</h2>
    <p>Variables defined at the module level are accessible everywhere in that file, but you need the <code className="bg-muted px-1.5 py-0.5 rounded text-sm">global</code> keyword to modify them inside a function:</p>
    <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-sm">
{`count = 0

def increment():
    global count
    count += 1

increment()
print(count)  # 1`}
    </pre>

    <h2 className="text-2xl font-semibold text-primary mt-8">Enclosing Scope</h2>
    <p>When you nest functions, the inner function can read variables from the outer function. To modify them, use <code className="bg-muted px-1.5 py-0.5 rounded text-sm">nonlocal</code>:</p>
    <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-sm">
{`def outer():
    x = 10
    def inner():
        nonlocal x
        x += 5
    inner()
    print(x)  # 15

outer()`}
    </pre>

    <h2 className="text-2xl font-semibold text-primary mt-8">Key Takeaways</h2>
    <ul className="list-disc list-inside space-y-2 pl-4">
      <li>Always think about <em>where</em> a variable is defined — that determines where it's visible.</li>
      <li>Avoid overusing <code className="bg-muted px-1.5 py-0.5 rounded text-sm">global</code>; it makes code harder to reason about.</li>
      <li>The LEGB rule is your mental model for how Python looks up names.</li>
    </ul>
  </div>
);

export default UnderstandingScopeInPython;
